/*
* @Author: wangwh8
* @Date:   2017-09-04 18:22:44
* @Last Modified by:   wangwh8
* @Last Modified time: 2017-09-11 14:53:49
*/
/**
* filter Module
*
* Description
*/
angular.module('filter', [])
.filter('hidepasswd', function(){
    return function hidepasswd(auth){
        if (auth == undefined) return;
        var hide = '';
        for (var i = 0; i < auth.password.length; i++){
            hide += '*';
        }
        return auth.username + ':' + hide;
    }
    
}).filter('getNumberArray', function(){
    return function(num) {
        return new Array(parseInt(num))
    }
})