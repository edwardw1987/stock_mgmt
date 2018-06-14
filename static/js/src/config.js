/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   wangwh8
 * @Last Modified time: 2018-06-14 14:10:36
 */

'use strict';
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
    $urlRouterProvider.when("/settings", "/settings/change-password");
    //
    // Now set up the states

    $stateProvider
    .state({
        name: 'stock',
        url: '/stock',
        template: '<stock-list></stock-list>',
    })
    .state({
        name:'stockFlows',
        url:'/stock/{id}/flows',
        template: "<stock-flows></stock-flows>",
    })
    .state({
        name: 'flowIn',
        url: '/flow-in',
        template: '<flowin-list></flowin-list>',
    })
    .state({
        name: 'flowOut',
        url: '/flow-out',
        template: '<flowout-list></flowout-list>',
    })
    .state({
        name: 'settings',
        url: '/settings',
        template: '<settings-nav></settings-nav>',
        // onEnter: ["$state", function($state){
        //     $state.go("settings.changepassword");   
        // }]
    })
    .state({
        url: "/change-password",
        name: 'settings.changepassword',
        template: "<changepasswordform></changepasswordform>"
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

}]).name;