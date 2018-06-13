/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   edward
 * @Last Modified time: 2018-06-13 23:27:35
 */

'use strict';
import flowHtml from "../../../templates/partials/flow.html"
export default 
angular.module('config', [])
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
        controller: "stockCtrl"
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
        template: flowHtml,
        // templateUrl: "partials/flow.html",
        controller: 'flowInCtrl'
    }
    var flowOutState = {
        name: 'flowOut',
        url: '/flow-out',
        templateUrl: "partials/flow.html",
        controller: 'flowOutCtrl'
    }
    // ------------------  
    $stateProvider
        .state(stockState)
        .state(stockFlowsState)
        .state(stockInState)
        .state(stockOutState)
        .state(flowInState)
        .state(flowOutState)
    ;
}]).name;