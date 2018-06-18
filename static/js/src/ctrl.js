export default 
angular.module('ctrl', [])
.constant('Flow', function Flow($scope, $state, $timeout, scan, data){
    let flow = {
        error: null,
        method: data.method,
        scan: scan,
        inputBarCode: '',
        flowList: [],
        doneList: [],
        onFly: false,
        show: false,
        deleteItem: null,
        commitItem: null,
        start(){
            this.onFly = true;
            let scanMethod = this.scan[this.method];
            let oneStock = this.flowList.pop();
            while(oneStock){                    
                scanMethod(oneStock).then((resp)=>{
                    if (resp.data.success){
                        this.doneList.push(oneStock);
                    }else{
                        this.flowList.push(oneStock);
                    }
                })
                oneStock = this.flowList.pop();
            }
        },
        delete(){
            if (!this.deleteItem) return;
            scan.delFlow(this.deleteItem.id).then((resp) => {
                if (resp.data.success){
                    window.location.reload();
                }
            })
        },
        initFlowList(){
            this.show = false;
            this.scan.listFlow({
                method: this.method, wid: data.wid}).then((resp) => {
                this.flowList = resp.data.flowList;
                this.show = true;
            })
        },
        onBarcodeInput(e){
            if(e.keyCode != 13) return;
            this.scan.newFlow({
                warehouse_id: data.wid,
                method: data.method,
                barcode: this.inputBarcode,
            }).then((resp) => {
                if (resp.data.success){
                    this.error = null;
                    window.location.reload();
                }else{
                    this.inputBarcode = '';
                    this.error = resp.data.error
                }
            })
        },
        promise: null,
        onQuantityChange(item, oldval){
            /*here is a trick*/
            if(item.flowQuantity == undefined){
                item.flowQuantity = parseInt(oldval);
                return
            }else{
                if (this.promise != null){
                    $timeout.cancel(this.promise);
                }
                this.promise = $timeout(()=>{
                    this.scan.updateFlow({
                        method: this.method,
                        id: item.id,
                        flowQuantity: item.flowQuantity
                    }).then((resp) => {
                        console.log(resp.data.success);
                        this.promise = null;
                    })
                    
                }, 500)
            }
        },
        commit(){
            if (!this.commitItem) return;
            this.scan.commitFlow({id: this.commitItem.id, method: this.method}).then((resp) => {
                if (resp.data.success){
                    window.location.reload();
                }else{
                    alert("Fail to commit!");
                }
            })
        },
        upload(input){
            this.scan.newFlowBatch({
                warehouse_id: data.wid,
                method: data.method,
                barcodeLines: input.split('\n').filter((e)=>{return e.trim();})
            }).then((resp) => {
                if (resp.data.noneStockBarcode){
                    $scope.$emit("error", resp.data.noneStockBarcode)
                }else{
                    window.location.reload();
                }
            })
        },
        popupDelete(item){
            this.deleteItem = item;
            $scope.$emit("popupConfirmModal", {
                modal: {
                    title:'删除物料',
                    text1:'确定删除',
                    text2:[item.name + ' x ' + item.flowQuantity + item.measurement_text].join(""),
                }, 
                submit: () => {this.delete()}
            });
        },
        popupCommit(item){
            this.commitItem = item;
            $scope.$emit("popupConfirmModal", {
                modal: {
                    title:'更新' + $scope.flowText,
                    text1:'确认' + $scope.flowText,
                    text2:[item.name + ' x ' + item.flowQuantity + item.measurement_text].join(""),
                }, 
                submit: () => {this.commit()}
            });
        },
        toggleSidebar(){
            $scope.$emit("toggleSidebar");
        }
    }
    $scope.$on("upload", (event, input) => {
        flow.upload(input);
    })
    return flow;
})
.constant('translate', function translate(s){
    
    function getTransMap(intab, outtab){
        let transMap = {}
        intab.split('').forEach(function(e, i){
            transMap[e] = outtab[i]
        })
        return transMap
    }
    let intab = "AbdGhjm1pt9Z=",
        outtab = "192AGZbdhjmpt",
        transMap = getTransMap(intab, outtab)
    ;
    var arr = s.split('')
    arr.forEach(function(e, i){
        if (e in transMap){
            arr[i] = transMap[e]
        }
    })
    return arr.join('')
})
.constant('getCurWid', function(){
    return angular.element('[name="wid"]').val();
})
.controller('layoutCtrl', function($scope){
    this.key = "_sidebarOpen"
    this.sidebar = {
        open: store.get(this.key) || false,
        show: false,
    }
    this.toggleSidebar = (event) => {
        this.sidebar.open = ! this.sidebar.open;
        store.set(this.key, this.sidebar.open);
    }
    $scope.$on("popupConfirmModal", (event, data) => {
        $scope.$broadcast("resolveConfirm", data)
    })
    $scope.$on('toggleSidebar', this.toggleSidebar)
    $scope.$on("sidebar", (event, open, show) => {
        this.sidebar = {
            open: open === null ? this.sidebar.open : open, 
            show: show === null ? this.sidebar.show : show
        }
    })
    $scope.$on("confirmUpload", (event, input) => {
        $scope.$broadcast("upload", input);
    })
    $scope.$on("error", (event, input) => {
        $scope.$broadcast("showModalError", input)
    })
})
.controller('stockCtrl', function($scope, $timeout, $state, scan, getCurWid){
    $scope.stock = {
        warehouse_id: getCurWid(),
        duplicate: [],
        animate: false,
        show: false,
        data:{},
        stockList: [],
        mOptions: {},
        searchText: '',
        promise: null,
        deleteItem: null,
        checkAll: false,
        flowoutAllDisabled: true,
        checkedFlowoutAllowed(){
            if (!this.hasCheckedItem()) return false;
            let ret = true;
            this.stockList.forEach((e) => {
                if (e.checked && e.quantity <= 0){
                    ret = false;
                    return
                }
            })
            return ret;
        },
        hasCheckedItem(){
            let ret = false;
            this.stockList.forEach((stock) => {
                if (stock.checked){
                    ret = true;
                    return
                }
            })
            return ret;
        },
        onCheckAllChange(){
            this.stockList.forEach((stock) => {
                stock.checked = this.checkAll? true: false;
            })
        },
        onCheckChange(item){
            if (!item.checked){
                this.checkAll = false;
            }
            let i = 1;
            this.stockList.forEach((e) => {
                i &= e.checked ? 1: 0;
            })
            if (i === 1){
                this.checkAll = true;
            }

        },
        onSearchTextChange(){
            if (this.promise != null){
                $timeout.cancel(this.promise);
            }
            if (this.searchText.trim().length < 1) return;
            this.promise = $timeout(()=>{
               console.log(this.searchText)
            }, 500)
        },
        isDuplicate(){
            this.animate = false;
            return scan.queryStock({
                barcode:this.data.barcode,
                wid: this.warehouse_id,
            }).then(function(resp){
                console.log(resp.data)
                if (resp.data.success){
                    this.duplicate.push(this.data.barcode)
                    return true
                }else{
                    this.duplicate = [];
                    return false
                }
            }.bind(this))
        },
        save(formValid){
            if(!formValid) return;
            this.isDuplicate().then((isdup)=>{
                if (isdup) {
                    this.animate = true;
                    return;
                }
                let newStock = Object.assign({}, this.data);
                newStock.warehouse_id = this.warehouse_id;
                scan.newStock(newStock).then(function(resp){
                    if (resp.data.success){
                        // window.location.reload();
                        $state.reload()
                    }else{
                        alert("error on create")
                    }
                })
            })
        },
        popupDelete(item){
            this.deleteItem = item;
            $scope.$emit("popupConfirmModal", {
                modal: {
                    title: '删除物料',
                    text1:'确定删除',
                    text2:[item.name + ' x ' + item.quantity + item.measurement_text].join(""),
                }, 
                submit: () => {this.delete()}
            });
        },
        delete(){
            if (!this.deleteItem) return;
            scan.delStock(this.deleteItem.id).then(function(resp){
                if (resp.data.success){
                    window.location.reload();
                }else{
                    alert("error on delete")
                }
            })
            return false;
        },
        initStockList(){
            scan.listStock({wid: this.warehouse_id}).then((resp) => {
                this.stockList = resp.data.stockList;
                this.show = true;
            })
            scan.mOptions().then((resp) => {
                this.mOptions = resp.data;
            })
        },
        toggleSidebar(){
            $scope.$emit("toggleSidebar");
        }
    };
    $scope.$on("delete", () => {
        $scope.stock.delete();
    })
    $scope.stock.initStockList();
    $scope.$emit("sidebar", null, true);
})
.controller('flowinCtrl', ($scope, $state, $timeout, scan, Flow, getCurWid) => {
    $scope.flow = new Flow($scope, $state, $timeout, scan, {
        method: 'flow-in', 
        wid: getCurWid(),
    });
    $scope.flow.initFlowList();
    $scope.flowText = "入库";   
    $scope.$emit("sidebar", null, true);
})
.controller('flowoutCtrl', ($scope, $state, $timeout, scan, Flow, getCurWid) => {
    $scope.flow = new Flow($scope, $state, $timeout, scan, {
        method: "flow-out",
        wid: getCurWid(),
    });
    $scope.flow.initFlowList();
    $scope.flowText = "出库";
    $scope.$emit("sidebar", null, true);
})
.controller('stockFlowsCtrl', function($scope, $stateParams, scan){
    $scope.curStock = null;
    scan.listFlow({stockid: $stateParams.id}).then((resp) => {
        $scope.flowList = resp.data.flowList;
        $scope.stock = resp.data.stock;
    })
    $scope.goBack = ()=>{
        window.history.back();
    }
    $scope.$emit("sidebar", false, false);
})
.controller('changepasswordCtrl', 
function($scope, $timeout, $base64, admin, translate){
    let self = $scope;
    self.opasswd = ''
    self.npasswd = ''
    self.cpasswd = ''
    self.log = null
    self.identifyPassword = function(){
        if (self.cpasswd && self.npasswd){
            if (self.cpasswd === self.npasswd){
                self.log = null;
            }else{
                if (self.log === null) {
                    self.log = {text: "新密码与确认密码不一致", level: 'error'};
                }
            }
        }
    }
    self.onSubmitPasswordForm = function(){
        admin.updateUserPassword({
            opasswd: translate($base64.encode(self.opasswd)),
            npasswd: translate($base64.encode(self.npasswd)),
            cpasswd: translate($base64.encode(self.cpasswd))
        }).then((resp) => {
            self.log = null;
            if (resp.data.success){
                self.log = {text: '密码修改成功', level: 'info'}
            }else{
                self.log = {text: {1: "旧密码错误"}[resp.data.error], level: 'error'}
            }
            self.opasswd = ''
            self.npasswd = ''
            self.cpasswd = ''
        })
    }
})
.controller('warehouseFormCtrl', function($scope, $timeout, scan){
    let self = this;
    self.warehouse = {}
    self.log = null
    self.countdown = 3;
    self.submitDisabled = false;
    self.getLogText = () => {
        let text;
        if (self.log.level == "info"){
            text = self.log.text + ", " + self.countdown + "秒后刷新...";
        }else if(self.log.level == "error"){
            text  =self.log.text
        }
        return text;
    }
    self.onSubmitWarehouseForm = () => {
        scan.newWarehouse(self.warehouse).then((resp) => {
            self.log = null;
            if (resp.data.success){
                self.log = {level: 'info', text: '创建成功'}
                self.submitDisabled = true;
                var interval = setInterval(() => {
                    $scope.$apply(() => {
                        self.countdown --;
                    })
                    if (self.countdown === 0){
                        window.location.href = "/"
                    }
                }, 1000)

            }else{
                self.log = {level: 'error', text: {1: '仓库已存在'}[resp.data.error]}
            }
        })
    }
})
.controller('confirmModalCtrl', function($scope){
    $scope.$on("resolveConfirm", (event, data) => {
        this.modal = data.modal;
        this.submit = data.submit
    })   

})
.controller('uploadModalCtrl', function($scope){
    this.submit = () => {
        $scope.$emit("confirmUpload", this.input)
    }
    $scope.$on("showModalError", (event, input) => {
        this.error = input;
    })
})
.name;