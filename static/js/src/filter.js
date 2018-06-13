export default
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
}).name;