/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   edward
 * @Last Modified time: 2018-06-09 22:51:33
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
    var stockListState = {
        name: 'stockList',
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
                save(){
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
    var stockDetailState = {
        name:'stockDetail',
        url:'/stock/{id}',
        templateUrl: "partials/stock_detail.html",
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
            scan.listFlow({stockid: $stateParams.id}).then((resp) => {
                $scope.flowList = resp.data.flowList;
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


    $stateProvider.state(stockListState);
    $stateProvider.state(stockDetailState);
    $stateProvider.state(stockInState);
    $stateProvider.state(stockOutState);
}])
;