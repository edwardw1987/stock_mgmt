/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   wangwh8
 * @Last Modified time: 2018-06-21 13:29:22
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
    function isSidebarOpen(){
        let key = "_sidebarOpen"
        return store.get(key) || false
    }
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
        component: 'stockList',
        resolve:{
            sidebarOpen: isSidebarOpen
        },
    })
    .state({
        name: 'stock.stocktake',
        url: '/stocktake',
        component: 'stocktake',
        resolve:{
            sidebarOpen: isSidebarOpen
        },
        redirectTo: {state: 'stock.stocktake.detail', params: { id: 'latest' }}
    })
    .state({
        name: 'stock.stocktake.new',
        url: '/new',
        component: 'stocktakeNew'
    })
    .state({
        name: 'stock.stocktake.detail',
        url: '/{id}',
        component: 'stocktakeDetail',
        resolve: {
          // Dependencies are annotated in "Inline Array Annotation"
          latestStocktake: ['scan', function($http, scan) {
            return {id: 999}
          }]
        },
        redirectTo: (trans) => {
          if (trans.params().id == 'latest'){
            let resolvePromise = trans.injector().getAsync('latestStocktake')
            return resolvePromise.then(resolveData => {
                return { 
                    state: 'stock.stocktake.detail', 
                    params: { id: resolveData.id || 'latest' 
                } 
            }
            });
          }
        }
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
        resolve:{
            sidebarOpen: isSidebarOpen
        },
    })
    .state({
        name: 'flow.out',
        url: '/out',
        component: 'flowoutList',
        resolve:{
            sidebarOpen: isSidebarOpen
        },
    })
}])
.name;