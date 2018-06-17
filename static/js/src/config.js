/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   edward
 * @Last Modified time: 2018-06-17 10:33:00
 */

'use strict';
export default 
angular.module('config', [])
    .config(['$interpolateProvider', function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
}])
.config(function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
})
.factory('httpInterceptor', function () {
    return {
        response(response) {
            if (response.status === 200 && angular.isString(response.data)){
                window.location.reload();
            }
            return response;
        },
    }
})
.name;

   // function getTxt(a) {
   //      var deferred = $q.defer();
   //      $http.get('1.json')
   //          .success(function (d) {
   //              console.log(a);
   //              deferred.resolve();
   //          })

   //      return deferred.promise;
   //  }
   //  getTxt(1).then(function(){
   //      return getTxt(2);
   //  }).then(function(){
   //      return getTxt(3);
   //  }).then(function(){
   //      return getTxt(4);
   //  }).then(function(){
   //      return getTxt(5);
   //  }).then(function(){
   //      console.log('end');
   //  });
    