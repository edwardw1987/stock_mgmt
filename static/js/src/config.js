/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   edward
 * @Last Modified time: 2018-06-10 15:49:58
 */

'use strict';

angular.module('config', ['ui.router'])
    .config(['$interpolateProvider', function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
}]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider){
    //
    // $locationProvider.html5Mode(true)
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/stock");
    // $urlRouterProvider.when("/box/add", "/box/add/bugz");
    //
    // Now set up the states


    var stockState = {
        name: 'stock',
        url: '/stock',
        templateUrl: 'partials/stock_list.html',
        controller: ['$scope', '$timeout', 'scan', 
            function($scope, $timeout, scan){
            $scope.stock = {
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
                    return scan.getStockByBarcode(this.data.barcode).then(function(resp){
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
                        scan.newStock(this.data).then(function(resp){
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
                    scan.listStock().then((resp) => {
                        this.stockList = resp.data.stockList;
                        this.show = true;
                    })
                    scan.mOptions().then((resp) => {
                        this.mOptions = resp.data;
                    })
                }
            };
            $scope.stock.initStockList();
        }]
    }
    var stockFlowsState = {
        name:'stockFlows',
        url:'/stock/{id}/flows',
        templateUrl: "partials/stock_flows.html",
        controller: ['$scope', '$stateParams', 'scan', function($scope, $stateParams, scan){
            $scope.curStock = null;
            scan.listFlow({stockid: $stateParams.id}).then((resp) => {
                $scope.flowList = resp.data.flowList;
                $scope.stock = resp.data.stock;
            })
        }]
    }
    var stockInState = {
        name:'stockIn',
        url:'/stock/{id}/in',
        templateUrl: "partials/stock_in.html",
        controller: ['$scope', '$stateParams', 'scan', function($scope, $stateParams, scan){
            $scope.curStock = null;
            scan.getStock($stateParams.id).then((resp) => {
                console.log(resp.data)
                $scope.stock = resp.data.stock;
            })
        }]
    }
    var stockOutState = {
        name:'stockOut',
        url:'/stock/{id}/out',
        templateUrl: "partials/stock_out.html",
        controller: ['$scope', '$stateParams', 'scan', function($scope, $stateParams, scan){
            $scope.curStock = null;
            scan.listFlow({stockid: $stateParams.id}).then((resp) => {
                $scope.flowList = resp.data.flowList;
                $scope.stock = resp.data.stock;
            })
        }]
    }
    var flowInState = {
        name: 'flowIn',
        url: '/flow-in',
        templateUrl: "partials/flow.html",
        controller: ['$scope', "scan", ($scope, scan) => {
            $scope.flow = new Flow("flow-in", scan);
            $scope.flow.initFlowList();
            $scope.flowText = "入库";
        }]
    }
    var flowOutState = {
        name: 'flowOut',
        url: '/flow-out',
        templateUrl: "partials/flow.html",
        controller: ['$scope', "scan", ($scope, scan) => {
            $scope.flow = new Flow("flow-out", scan);
            $scope.flow.initFlowList();
            $scope.flowText = "出库";
        }]
    }
    function Flow(method, scan){
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
        }
        return flow;
    }
  
    $stateProvider
        .state(stockState)
        .state(stockFlowsState)
        .state(stockInState)
        .state(stockOutState)
        .state(flowInState)
        .state(flowOutState)
    ;
}])
;