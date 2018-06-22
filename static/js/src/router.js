/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   wangwh8
 * @Last Modified time: 2018-06-22 16:54:28
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
        name: 'stock.take',
        url: '/take',
        component: 'stocktake',
        redirectTo: {state: 'stock.take.detail', params: { id: 'latest' }}
    })
    .state({
        name: 'stock.take.new',
        url: '/new',
        component: 'stocktakeNew',
    })
    .state({
        name: 'stock.take.detail',
        url: '/{id}',
        component: 'stocktakeDetail',
        resolve: {
          stocktakeList: ['scan', 'getCurWid', function(scan, getCurWid) {
            return scan.listStocktake({wid: getCurWid()});
          }]
        },
        redirectTo: (trans) => {
          if (trans.params().id == 'latest'){
            let resolvePromise = trans.injector().getAsync('stocktakeList')
            return resolvePromise.then(resolveData => {
                let lastestId;
                if (resolveData.data.length > 0){
                    lastestId = resolveData.data[0].id;
                }
                return { 
                    state: 'stock.take.detail', 
                    params: {id: lastestId || 'latest'}
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