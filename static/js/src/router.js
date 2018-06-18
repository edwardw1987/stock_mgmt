/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   edward
 * @Last Modified time: 2018-06-18 14:42:41
 */

'use strict';
export default 
angular.module('router', [])
.config(['$stateProvider', '$urlServiceProvider', '$locationProvider', 
    function($stateProvider, $urlServiceProvider, $locationProvider){
    //
    // $locationProvider.html5Mode(true)
    // For any unmatched url, redirect to /state1
    // $urlRouterProvider.otherwise({state: 'stock'});
    $urlServiceProvider.rules.otherwise({ state: 'stock' });
    //
    // Now set up the states

    $stateProvider
    .state({
        name: 'stock',
        url: '/stock',
        component: 'stockList',
    })
    .state({
        name:'stockFlows',
        url:'/stock/{id}/flows',
        component: 'stockFlows',
    })
    .state({
        name: 'flowin',
        url: '/flow-in',
        component: 'flowinList',
    })
    .state({
        name: 'flowout',
        url: '/flow-out',
        component: 'flowoutList',
    })
 
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
}])
.name;