export default 
angular.module('ctrl', [])
.constant('Flow', function Flow($scope, method, scan){
    let flow = {
        method: method,
        scan: scan,
        inputBarCode: '',
        barcodeLines:'',
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
            console.log(this.method)
            this.scan.listFlow({method: this.method}).then((resp) => {
                this.flowList = resp.data.flowList;
                this.show = true;
            })
        },
        animateStockByRowIndex(index){
            let animationClass = "lightSpeedIn animated";
            $("#flow tr").eq(index).addClass(animationClass)
            .on('animationend webkitAnimationEnd oAnimationEnd', 
            function(){
                $(this).removeClass(animationClass);
            })
        },
        onBarcodeInput(e){
            if(e.keyCode != 13) return;
            this.scan.newFlow({
                method: this.method,
                barcode: this.inputBarcode,
            }).then((resp) => {
                window.location.reload();
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
        commit(item){
            if (!this.commitItem) return;
            this.scan.commitFlow({id: this.commitItem.id, method: this.method}).then((resp) => {
                if (resp.data.success){
                    window.location.reload();
                }else{
                    alert("Fail to commit!");
                }
            })
        },
        onBatchUpload(){
            this.scan.newFlowBatch({
                method: this.method,
                barcodeLines: this.barcodeLines.split('\n')
            }).then((resp) => {
                window.location.reload();
            })
        },
        popupDelete(item){
            this.deleteItem = item;
        },
        popupCommit(item){
            this.commitItem = item;
        },
        toggleSidebar(){
            $scope.$emit("toggleSidebar");
        }
    }
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
    this.key = "_sidebarState"
    this.sidebar = {
        open: false,
        show: false,
    }
    this.toggleSidebar = (event) => {
        this.sidebar.open = ! this.sidebar.open;
    }
    $scope.$on("popupDelete", (event, data) => {
        $scope.$broadcast("syncDeleteItem", data)
    })
    $scope.$on('toggleSidebar', this.toggleSidebar)
    $scope.$on('confrimDelete', (event) => {
        $scope.$broadcast("delete")
    })
    $scope.$on("sidebar", (event, open, show) => {
        this.sidebar = {
            open: open === null ? this.sidebar.open : open, 
            show: show === null ? this.sidebar.show : show
        }
    })
})
.controller('stockCtrl', function($scope, $timeout, scan, getCurWid){
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
                        window.location.reload();
                    }else{
                        alert("error on create")
                    }
                })
            })
        },
        popupDelete(item){
            this.deleteItem = item;
            $scope.$emit("popupDelete", item);
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
.controller('flowinCtrl', ($scope, scan, Flow) => {
    $scope.flow = new Flow($scope, "flow-in", scan);
    $scope.flow.initFlowList();
    $scope.flowText = "入库";   
})
.controller('flowoutCtrl', ($scope, scan, Flow) => {
    $scope.flow = new Flow($scope, "flow-out", scan);
    $scope.flow.initFlowList();
    $scope.flowText = "出库";
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
    self.countdown = 5;
    self.submitDisabled = false;
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
                        window.location.reload();
                    }
                }, 1000)

            }else{
                self.log = {level: 'error', text: {1: '仓库已存在'}[resp.data.error]}
            }
        })
    }
})
.controller('deleteModalCtrl', function($scope){
    $scope.$on("syncDeleteItem", (event, data, type) => {
        this.modal = {
            title: '删除物料',
            confirmText1: [data.name, ' x ', data.quantity + ' ?'].join('')
        }
    })   
    this.delete = () => {
        $scope.$emit("confrimDelete")
    }
})
.name;