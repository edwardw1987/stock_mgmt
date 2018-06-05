/*
 * @Author: wangwh8
 * @Date:   2017-06-27 13:54:38
 * @Last Modified by:   wangwh8
 * @Last Modified time: 2017-07-06 11:01:06
 */

'use strict';

angular.module('config', [])
    .config(['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);;