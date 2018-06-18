/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   edward
 * @Last Modified time: 2018-06-18 22:03:57
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
}])
.name;