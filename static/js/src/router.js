/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   edward
 * @Last Modified time: 2018-06-19 21:37:02
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
        controller: 'stockCtrl',
        redirectTo: {state: 'stock.list'},
    })
    .state({
        name: 'stock.list',
        url: '/list',
        component: 'stockList'
    })
    .state({
        name: 'stock.stocktake',
        url: '/stocktake',
        component: 'stocktake'
    })
    .state({
        name:'stock.flows',
        url:'/{id}/flows',
        component: 'stockFlows',
    })
    .state({
        name: 'flow',
        url: '/flow',
        controller: 'flowCtrl',
        redirectTo: {state: 'flow.in'},
    })
    .state({
        name: 'flow.in',
        url: '/in',
        component: 'flowinList',
    })
    .state({
        name: 'flow.out',
        url: '/out',
        component: 'flowoutList',
    })
}])
.name;