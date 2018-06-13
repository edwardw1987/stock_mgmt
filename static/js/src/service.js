export default 
angular.module('rest', [])
.service('scan', function($http){
    this.mOptions = function(){
        return $http({
            url: '/m/options'
        })
    }
    this.newStock = function(data){
        return $http({
            url: "/api/stock/",
            data: data,
            method: "POST"
        })
    }
    this.delStock = function(id){
        return $http({
            url: "/api/stock/",
            data: {action: "delete", id:id},
            method: "POST"
        })
    }
    this.listStock = function(){
        return $http({
            url: "/api/stock"
        })
    }
    this.getStock = function(id){
        return $http({
            url: "/api/stock/" + id
        })

    }
    this.getStockByBarcode = function(barocde){
        return $http({
            url: "/api/stock/",
            params: {
                barcode: barocde
            }
        })
    }
    this.newFlow = function(data){
        return $http({
            method: "POST",
            url: "/api/flow/",
            data: data
        })
    }
    this.newFlowBatch = function(data){
        return $http({
            method: "POST",
            url: "/api/flow/batch",
            data: data
        })
    }
    this.updateFlow = function(data){
        data.action = "update";
        return $http({
            method: "POST",
            url: "/api/flow/",
            data: data
        })
    }
    this.commitFlow = function(data){
        data.action = "commit"
        return $http({
            method: "POST",
            url: "/api/flow/",
            data: data
        })
    }
    this.delFlow = function(id){
        return $http({
            method: "POST",
            url: "/api/flow/",
            data: {
                action: "delete",
                id: id
            }
        })
    }
    this.listFlow = function(data){
        return $http({
            url: "/api/flow/",
            params: data
        })
    }
}).name;