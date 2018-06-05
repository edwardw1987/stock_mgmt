/*
 * @Author: wangwh8
 * @Date:   2017-06-27 14:27:06
 * @Last Modified by:   wangwh8
 * @Last Modified time: 2018-06-04 17:19:17
 */

'use strict';

angular.module('ctrl', [])
    .controller('scanStockCtrl', ['$scope', "scan", function($scope, scan){
        $scope.stock = {
            duplicate: [],
            animate: false,
            show: false,
            data:{},
            stockList: [],
            mOptions: {},
            isDuplicate: function(){
                this.animate = false;
                return scan.getStockByBarcode(this.data.barcode).then(function(resp){
                    console.log(resp.data)
                    if (resp.data.success){
                        this.duplicate.push(this.data.barcode)
                        return true
                    }else{
                        this.duplicate = [];
                        return false
                    }
                }.bind(this))
            },
            save: function(){
                this.isDuplicate().then((isdup)=>{
                    if (isdup) {
                        this.animate = true;
                        return;
                    }
                    scan.newStock(this.data).then(function(resp){
                        if (resp.data.success){
                            window.location.reload();
                        }else{
                            alert("error on create")
                        }
                    })
                })
            },
            delete: function(item){
                scan.delStock(item.id).then(function(resp){
                    if (resp.data.success){
                        window.location.reload();
                    }else{
                        alert("error on delete")
                    }
                })
                return false;
            },
            initStockList(){
                scan.listStock().then((resp) => {
                    this.stockList = resp.data.stockList;
                    this.show = true;
                })
                scan.mOptions().then((resp) => {
                    this.mOptions = resp.data;
                })
            }
        };
        $scope.stock.initStockList();
    }])
    .controller('scanFlowCtrl', ['$scope', "$timeout", "scan", function($scope, $timeout, scan){
        let method = angular.element('#method').val();
        $scope.flow = {
            inputBarCode: '',
            barcodeLines:'',
            flowList: [],
            doneList: [],
            onFly: false,
            show: false,
            start(method){
                this.onFly = true;
                let scanMethod = scan[method];
                let oneStock = this.flowList.pop();
                while(oneStock){                    
                    scanMethod(oneStock).then((resp)=>{
                        if (resp.data.success){
                            this.doneList.push(oneStock);
                        }else{
                            this.flowList.push(oneStock);
                        }
                    })
                    oneStock = this.flowList.pop();
                }
            },
            delete(item){
                scan.delFlow(item.id).then((resp) => {
                    if (resp.data.success){
                        window.location.reload();
                    }
                })
            },
            initFlowList(method){
                scan.listFlow(method).then((resp) => {
                    this.flowList = resp.data.flowList;
                    this.show = true;
                })
            },
            animateStockByRowIndex(index){
                let animationClass = "lightSpeedIn animated";
                $("#flow tr").eq(index).addClass(animationClass)
                .on('animationend webkitAnimationEnd oAnimationEnd', 
                function(){
                    $(this).removeClass(animationClass);
                })
            },
            onBarcodeInput(e, method){
                if(e.keyCode != 13) return;
                scan.newFlow({
                    method: method,
                    barcode: this.inputBarcode,
                }).then((resp) => {
                    window.location.reload();
                })
            },
            promise: null,
            onQuantityChange(item, oldval){
                /*here is a trick*/
                if(item.flowQuantity == undefined){
                    item.flowQuantity = parseInt(oldval);
                    return
                }else{
                    if (this.promise != null){
                        $timeout.cancel(this.promise);
                    }
                    this.promise = $timeout(()=>{
                        scan.updateFlow({
                            method: method,
                            id: item.id,
                            flowQuantity: item.flowQuantity
                        }).then((resp) => {
                            console.log(resp.data.success);
                            this.promise = null;
                        })
                        
                    }, 500)
                }
            },
            commit(item){
                scan.commitFlow({id: item.id, method: method}).then((resp) => {
                    if (resp.data.success){
                        window.location.reload();
                    }else{
                        alert("Fail to commit!");
                    }
                })
            },
            onBatchUpload(){
                scan.newFlowBatch({
                    method: method,
                    barcodeLines: this.barcodeLines.split('\n')
                }).then((resp) => {
                    window.location.reload();
                })
            }
        }

        $scope.flow.initFlowList(method);
    }])
    .controller('bugzCtrl', ['$scope', '$rootScope', '$timeout', 'bugz', 'uiGridConstants', 
        function($scope, $rootScope, $timeout, bugz, uiGridConstants){
            $scope.gridOptions = {
                showColumnFooter: true,
                enableGridMenu: true,
                enableSelectAll: true,
                exporterCsvFilename: 'myFile.csv',
                exporterPdfDefaultStyle: {
                    fontSize: 9
                },
                exporterPdfTableStyle: {
                    margin: [30, 30, 30, 30]
                },
                exporterPdfTableHeaderStyle: {
                    fontSize: 10,
                    bold: true,
                    italics: true,
                    color: 'red'
                },
                exporterPdfHeader: {
                    text: "My Header",
                    style: 'headerStyle'
                },
                exporterPdfFooter: function(currentPage, pageCount) {
                    return {
                        text: currentPage.toString() + ' of ' + pageCount.toString(),
                        style: 'footerStyle'
                    };
                },
                exporterPdfCustomFormatter: function(docDefinition) {
                    docDefinition.styles.headerStyle = {
                        fontSize: 22,
                        bold: true
                    };
                    docDefinition.styles.footerStyle = {
                        fontSize: 10,
                        bold: true
                    };
                    return docDefinition;
                },
                exporterPdfOrientation: 'portrait',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 500,
                exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                }
            };
            $scope.gridOptions.columnDefs = [];
            $rootScope.data = null;
            for (var i = 0; i < 20; i++){
                var optName = "gridOptions" + i;
                $scope[optName] = angular.copy($scope.gridOptions);
            }
            // 
            $rootScope.getSearchText = function(){
                if (!$rootScope.data || !$rootScope.data.data_list) {
                    return 'project'
                }
                var dataList = $rootScope.data.data_list, 
                    dataLen = dataList.length;
                if (dataLen == 1){
                    return dataList[0].name;
                } else {
                    return dataList.length + ' items';
                }
            }
            $rootScope.getBugList = function(val, q, status, severity){
                if (val == 0) return;
                showLoadingIcon();
                bugz.getBugList({
                    q: q,
                    st: status,
                    se: severity
                }).then(function(resp){
                    $rootScope.bugListData = resp.data;
                    hideLoadingIcon();
                    $('#bug-list-modal').modal();
                })
            }
            $rootScope.parseLink = function(){
                bugz.linkParse({
                    link: $rootScope.linkToParse
                }).then(function(resp){
                    if (resp.data.success == false) {
                        alert("Input wrong URL!!!")
                        return 
                    }
                    $rootScope.parsedResult = resp.data;
                })
            }
            $rootScope.cancelParsedResult = function(){
                $rootScope.parsedResult = null;
            }
            showLoadingIcon();
            bugz.getQueryList().then(function(resp){
                return resp.data;
            }).then(function(query_list){
                function doChartSearch(){
                    var params = {
                        q: query_list,
                        cf: 'status',
                        rf: 'severity',
                    }
                    if (!params.q.length) {
                        hideLoadingIcon();
                        return;
                    }
                    bugz.search(params).success(function(data) {
                        $rootScope.data = data;
                        // $timeout(function(){                    
                            data.data_list.forEach(function(data, idx){
                                var bug_list = data['data'],
                                    headers = data["cols"],
                                    gridOpt = $scope['gridOptions' + idx]
                                ;
                                gridOpt.columnDefs.push({
                                    name: data.row_label,
                                    headerCellClass: 'blue',
                                });
                                var headersLen = headers.length;
                                headers.forEach(function(e, idx) {
                                    var pushData = {
                                        name: e,
                                        aggregationType: uiGridConstants.aggregationTypes.sum,
                                        cellTemplate: '<a href="javascript:;" style="padding-left:5px;"'+ 
                                            ' ng-click="grid.appScope.getBugList({{ grid.getCellValue(row,col) }},\'' + data.name + '\', col.field, row.entity[\'' + 
                                            data.row_label + '\'])">' + '{{ grid.getCellValue(row,col) }}</a>'
                                    }
                                    // if (headersLen - 1 == idx) {
                                    //     delete pushData.cellTemplate;
                                    // }
                                    gridOpt.columnDefs.push(pushData);
                                })
                                gridOpt.data = bug_list;
                                do_set_pie(data, 'pie-cols-' + idx);
                                do_set_pie(data, 'pie-rows-' + idx);
                            })
                        // }, 0)
                    });
                }
                function doGridSearch(){
                    var params = {
                        q: query_list,
                        rf: 'status',
                        cf: 'severity',
                        aggr: 'ActiveDev',
                        atw: 1,
                    }
                    if (!params.q.length) return;
                    // showLoadingIcon();
                    bugz.search(params).success(function(data) {
                        $rootScope.data2 = data;
                        // $timeout(function(){                    
                            data.data_list.forEach(function(data, idx){

                                var bug_list = data['data'],
                                    headers = data["cols"],
                                    gridOpt = $scope['gridOptions' + (10 + idx)]
                                ;
                                gridOpt.columnDefs.push({
                                    name: data.row_label,
                                    headerCellClass: 'blue'
                                });
                                var headersLen = headers.length;
                                headers.forEach(function(e, idx) {
                                    var pushData = {
                                        name: e,
                                        aggregationType: uiGridConstants.aggregationTypes.sum,
                                        cellTemplate: '<a href="javascript:;" style="padding-left:5px;"'+ 
                                            ' ng-click="grid.appScope.getBugList({{ grid.getCellValue(row,col) }},\'' + data.name + '\', row.entity[\'' + 
                                            data.row_label + '\'], col.field)">' + '{{ grid.getCellValue(row,col) }}</a>'

                                    }
                                    // if (headersLen - 1 == idx) {
                                    //     delete pushData.cellTemplate;
                                    // }
                                    gridOpt.columnDefs.push(pushData);
                                })
                                gridOpt.data = bug_list;
                                do_set(data, 'timeline-' + (10 + idx));
                            })
                            hideLoadingIcon();
                        // }, 0)
                    });
                }
                doChartSearch();
                doGridSearch();
            })
            function _do_set(charts_data) {
                function initSeries(charts_data) {
                    var ret = [];
                    charts_data['cols'].forEach(function(val) {
                        ret.push({
                            barWidth: 30,
                            name: val,
                            type: "bar",
                            data: charts_data[val],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: function(c) {
                                            return c.data == 0 ? '' : c.data
                                        }
                                    }
                                }
                            },
                        })
                    })
                    return ret;
                }
                var myChart = echarts.init(document.getElementById('main'));
                var option = {
                    title: {
                        text: '',
                        textStyle: {
                            //文字颜色
                            color: 'black',
                            //字体风格,'normal','italic','oblique'
                            fontStyle: 'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight: 'bold',
                            //字体系列
                            fontFamily: 'sans-serif',
                            //字体大小
                            　　　　fontSize: 20
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: charts_data.timeline ? 　charts_data['timeline']['status'] : charts_data['cols']
                    },
                    toolbox: {
                        show: true,
                        orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
                        // 'horizontal' ¦ 'vertical'
                        x: 'right', // 水平安放位置，默认为全图右对齐，可选为：
                        // 'center' ¦ 'left' ¦ 'right'
                        // ¦ {number}（x坐标，单位px）
                        y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
                        // 'top' ¦ 'bottom' ¦ 'center'
                        // ¦ {number}（y坐标，单位px）
                        color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                        backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
                        borderColor: '#ccc', // 工具箱边框颜色
                        borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
                        padding: 5, // 工具箱内边距，单位px，默认各方向内边距为5，
                        showTitle: true,
                        feature: {
                            mark: {
                                show: true,
                                title: {
                                    mark: '辅助线-开关',
                                    markUndo: '辅助线-删除',
                                    markClear: '辅助线-清空'
                                },
                                lineStyle: {
                                    width: 1,
                                    color: '#1e90ff',
                                    type: 'dashed'
                                }
                            },
                            dataView: {
                                show: true,
                                title: 'data view',
                                readOnly: true,
                                lang: ['data view', 'close', 'refresh'],
                                optionToContent: function(opt) {
                                    var axisData = opt.xAxis[0].data;
                                    var series = opt.series;
                                    var table = '<table style="width:100%;text-align:center"><tbody><tr>' + '<td></td>' + '<td>' + series[0].name + '</td>' + '<td>' + series[1].name + '</td>' + '</tr>';
                                    for (var i = 0, l = axisData.length; i < l; i++) {
                                        table += '<tr>' + '<td>' + axisData[i] + '</td>' + '<td>' + series[0].data[i] + '</td>' + '<td>' + series[1].data[i] + '</td>' + '</tr>';
                                    }
                                    table += '</tbody></table>';
                                    return table;
                                }
                            },
                            magicType: {
                                show: true,
                                title: {
                                    bar: '柱形图',
                                    stack: '堆积',
                                    tiled: '平铺'
                                },
                                type: ['bar', 'stack', 'tiled']
                            },
                            restore: {
                                show: true,
                                title: '还原',
                                color: 'black'
                            },
                            saveAsImage: {
                                show: true,
                                title: '保存为图片',
                                type: 'jpeg',
                                lang: ['点击本地保存']
                            },
                            // myTool: {
                            //     show: true,
                            //     title: '自定义扩展方法',
                            //     icon: 'image://../asset/ico/favicon.png',
                            //     onclick: function() {
                            //         alert('myToolHandler')
                            //     }
                            // }
                        }
                    },
                    calculable: true,
                    // dataZoom : {
                    //     show : true,
                    //     realtime : true,
                    //     start : 20,
                    //     end : 80
                    // },
                    xAxis:
                    // [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: charts_data.timeline ? charts_data.timeline.date : charts_data['rows'],
                    },
                    // ],
                    yAxis: [{
                        type: 'value',
                        minInterval: 1,
                    }],
                    series: []
                }
                option['series'] = initSeries(charts_data)
                myChart.setOption(option);

            }
            function do_set_pie(charts_data, containerId) {
                var pie = charts_data.pie[containerId.split('-')[1]]
                var myChart = echarts.init(document.getElementById(containerId));
                var option = {
                    title : {
                        text: pie.text,
                        // subtext: 'statics from bugzilla',
                        padding: [50, 0, 0, 0],
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    // legend: {
                    //     orient: 'vertical',
                    //     left: 'left',
                    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    // },
                    series : [
                        {
                            name: pie.text,
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data: pie.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{ 
                                    label:{ 
                                      show: true, 
                                      formatter: '{b}:{c}({d}%)',
                                    }, 
                                    labelLine :{show:true, length:10},
                                  } 
                            }
                        }
                    ]
                };
                myChart.setOption(option);
            }



            function do_set(charts_data, id) {
                function initSeries(charts_data) {
                    var ret = [];
                    var data = charts_data['timeline']['series'];
                    data.forEach(function(e) {
                        ret.push({
                            barWidth: 30,
                            name: e['name'],
                            type: "line",
                            data: e['data'],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: function(c) {
                                            return c.data == 0 ? '' : c.data
                                        }
                                    }
                                }
                            },
                        })
                    })
                    return ret;
                }
                var myChart = echarts.init(document.getElementById(id));
                var option = {
                    title: {
                        text: '',
                        textStyle: {
                            //文字颜色
                            color: 'black',
                            //字体风格,'normal','italic','oblique'
                            fontStyle: 'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight: 'bold',
                            //字体系列
                            fontFamily: 'sans-serif',
                            //字体大小
                            　　　　fontSize: 20
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: charts_data.timeline ? 　charts_data['timeline']['status'] : charts_data['cols']
                    },
                    toolbox: {
                        show: true,
                        orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
                        // 'horizontal' ¦ 'vertical'
                        x: 'right', // 水平安放位置，默认为全图右对齐，可选为：
                        // 'center' ¦ 'left' ¦ 'right'
                        // ¦ {number}（x坐标，单位px）
                        y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
                        // 'top' ¦ 'bottom' ¦ 'center'
                        // ¦ {number}（y坐标，单位px）
                        color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                        backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
                        borderColor: '#ccc', // 工具箱边框颜色
                        borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
                        padding: 5, // 工具箱内边距，单位px，默认各方向内边距为5，
                        showTitle: true,
                        feature: {
                            mark: {
                                show: true,
                                title: {
                                    mark: '辅助线-开关',
                                    markUndo: '辅助线-删除',
                                    markClear: '辅助线-清空'
                                },
                                lineStyle: {
                                    width: 1,
                                    color: '#1e90ff',
                                    type: 'dashed'
                                }
                            },
                            dataView: {
                                show: true,
                                title: 'data view',
                                readOnly: true,
                                lang: ['data view', 'close', 'refresh'],
                                optionToContent: function(opt) {
                                    var axisData = opt.xAxis[0].data;
                                    var series = opt.series;
                                    var table = '<table style="width:100%;text-align:center"><tbody><tr>' + '<td></td>' + '<td>' + series[0].name + '</td>' + '<td>' + series[1].name + '</td>' + '</tr>';
                                    for (var i = 0, l = axisData.length; i < l; i++) {
                                        table += '<tr>' + '<td>' + axisData[i] + '</td>' + '<td>' + series[0].data[i] + '</td>' + '<td>' + series[1].data[i] + '</td>' + '</tr>';
                                    }
                                    table += '</tbody></table>';
                                    return table;
                                }
                            },
                            magicType: {
                                show: true,
                                title: {
                                    bar: '柱形图',
                                    stack: '堆积',
                                    tiled: '平铺'
                                },
                                type: ['bar', 'stack', 'tiled']
                            },
                            restore: {
                                show: true,
                                title: '还原',
                                color: 'black'
                            },
                            saveAsImage: {
                                show: true,
                                title: '保存为图片',
                                type: 'jpeg',
                                lang: ['点击本地保存']
                            }
                        }
                    },
                    calculable: true,
                    dataZoom : {
                        show : true,
                        realtime : true,
                        start : 0,
                        end : 100
                    },
                    xAxis:
                    // [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: charts_data.timeline ? charts_data.timeline.date : charts_data['rows'],
                    },
                    // ],
                    yAxis: [{
                        type: 'value',
                        minInterval: 1,
                    }],
                    series: []
                }
                option['series'] = initSeries(charts_data)
                myChart.setOption(option);

            }

            function showLoadingIcon(text) {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                if (text === undefined) text = 'Loading...'
                $mask.fadeIn(200);
                $loadingIcon.show().find('#loading-hint').text(text)
            }
            function hideLoadingIcon() {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                $loadingIcon.hide()
                $mask.hide()
            }
    }])
    .controller('chartBugzProductCtrl', ['$scope', '$http', '$timeout', 'bugz', function($scope, $http, $timeout, bugz){
        $scope.syncProuductList = function(){        
            bugz.getProductList().then(function(resp){
                $scope.productList = resp.data.reverse();
            })
        }
        $scope.syncProuductList();
        $scope.newProduct = {}
        $scope.showAlert = {
            saved: false,
            deleted: false,
        }
        $scope.onAddProduct = function(){
            var pd = $scope.newProduct.value,
                en = $scope.newProduct.enable || 'off'
            ;
            if (pd) {
                bugz.productAdd({
                    product: pd,
                    enable: en
                }).then(function(resp){
                    var tmp = [resp.data.product].concat($scope.productList);
                    $scope.productList = tmp
                    $scope.newProduct.value = '';
                    scope.newProduct.enable = false;
                })
            } 
        }
        $scope.onDelProduct = function(id) {
            bugz.productDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncProuductList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveProduct = function($index) {
            var product = $scope.productList[$index]
            bugz.productSave({
                id: product.id,
                value: product.value,
                enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartBugzApiCtrl', ['$scope', '$timeout', 'bugz', function($scope, $timeout, bugz){
        $scope.syncApiconfig = function(){        
            bugz.getAPIConfig().then(function(resp){        
                $scope.apiConfig = resp.data;
            })
        }
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.syncApiconfig();
        $scope.onSaveApiconfig = function(){
            bugz.saveApiconfig($scope.apiConfig)
            .then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
        $scope.$on('emitSyncApiconfig', $scope.syncApiconfig);
    }])
    .controller('chartBugzEndpointCtrl', ['$scope', '$http', '$timeout', 'bugz', function($scope, $http, $timeout, bugz){
        $scope.syncEndpointList = function(){        
            bugz.getEndpointList().then(function(resp){
                $scope.endpointList = resp.data.reverse();
            })
        }
        $scope.syncEndpointList()
        $scope.newEndpoint = {};
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.onSaveApiConfig = function(){
            bugz.saveAPIConfig($scope.apiConfig)
            .then(function(resp){
                console.log(resp.data);
            })
        }
        $scope.onAddEndpoint = function(){
            var value = $scope.newEndpoint.value
            ;
            if (value) {
                bugz.endpointAdd($scope.newEndpoint)
                .then(function(resp){
                    $scope.$emit('emitSyncApiconfig');
                    var tmp = [resp.data.endpoint].concat($scope.endpointList);
                    $scope.endpointList = tmp;
                    $scope.newEndpoint.value = '';
                })
            }

        }
        $scope.onDelEndpoint = function(id) {
            bugz.endpointDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncEndpointList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveEndpoint = function($index) {
            var endpoint = $scope.endpointList[$index]
            bugz.endpointSave({
                id: endpoint.id,
                value: endpoint.value,
                // enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartBugzApikeyCtrl', ['$scope', '$http', '$timeout', 'bugz', function($scope, $http, $timeout, bugz){
        $scope.syncApikeyList = function(){        
            bugz.getApikeyList().then(function(resp){
                $scope.apikeyList = resp.data.reverse();
            })
        }
        $scope.syncApikeyList()
        $scope.newApikey = {};
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.onAddApikey = function(){
            var value = $scope.newApikey.value
            ;
            if (value) {
                bugz.apikeyAdd($scope.newApikey)
                .then(function(resp){
                    $scope.$emit('emitSyncApiconfig');
                    var tmp = [resp.data.apikey].concat($scope.apikeyList);
                    $scope.apikeyList = tmp;
                    $scope.newApikey.value = '';
                    $scope.newApikey.name = '';
                })
            }
        }
        $scope.onDelApikey = function(id) {
            bugz.apikeyDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncApikeyList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveApikey= function($index) {
            var apikey = $scope.apikeyList[$index]
            bugz.apikeySave({
                id: apikey.id,
                value: apikey.value,
                name: apikey.name,
                // enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartJiraProductCtrl', ['$scope', '$http', '$timeout', 'jira', function($scope, $http, $timeout, jira){
        $scope.syncProuductList = function(){        
            jira.getProductList().then(function(resp){
                $scope.productList = resp.data.reverse();
            })
        }
        $scope.syncProuductList();
        $scope.newProduct = {}
        $scope.showAlert = {
            saved: false,
            deleted: false,
        }
        $scope.onAddProduct = function(){
            var pd = $scope.newProduct.value,
                en = $scope.newProduct.enable || 'off'
            ;
            if (pd) {
                jira.productAdd({
                    product: pd,
                    enable: en
                }).then(function(resp){
                    var tmp = [resp.data.product].concat($scope.productList);
                    $scope.productList = tmp;
                    $scope.newProduct.value = '';
                    $scope.newProduct.enable = false;
                })
            } 
        }
        $scope.onDelProduct = function(id) {
            jira.productDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncProuductList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveProduct = function($index) {
            var product = $scope.productList[$index]
            jira.productSave({
                id: product.id,
                value: product.value,
                enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartJiraApiCtrl', ['$scope', '$timeout', 'jira', function($scope, $timeout, jira){
        $scope.syncApiconfig = function(){        
            jira.getAPIConfig().then(function(resp){        
                $scope.apiConfig = resp.data;
            })
        }
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.syncApiconfig();
        $scope.onSaveApiconfig = function(){
            jira.saveApiconfig({
                endpoint:$scope.apiConfig.endpoint,
                username:$scope.apiConfig.auth.username,
                password:$scope.apiConfig.auth.password
            })
            .then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
        $scope.updateApiconfig = function(event, authList){
            var authInfo = $scope.apiConfig.auth
            for (var i = 0; i < authList.length; i++){
                var auth = authList[i];        
                if (auth.name == authInfo.username && auth.value == authInfo.password){
                    authInfo.index = '' + i;
                    break;
                }
            }
            // $scope.$apply(function(){
                $scope.apiConfig.auth = authInfo;
            // })
            console.log( $scope.apiConfig.auth)
        }
        $scope.onAuthRadioChange = function(auth){
            $scope.apiConfig.auth.username = auth.name;
            $scope.apiConfig.auth.password = auth.value;
        }
        $scope.$on('emitSyncApiconfig', $scope.syncApiconfig);
        $scope.$on('emitUpdateApiconfig', $scope.updateApiconfig);
    }])
    .controller('chartJiraEndpointCtrl', ['$scope', '$http', '$timeout', 'jira', function($scope, $http, $timeout, jira){
        $scope.syncEndpointList = function(){        
            jira.getEndpointList().then(function(resp){
                $scope.endpointList = resp.data.reverse();
            })
        }
        $scope.syncEndpointList()
        $scope.newEndpoint = {};
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.onSaveApiConfig = function(){
            jira.saveAPIConfig($scope.apiConfig)
            .then(function(resp){
                console.log(resp.data);
            })
        }
        $scope.onAddEndpoint = function(){
            var value = $scope.newEndpoint.value
            ;
            if (value) {
                jira.endpointAdd($scope.newEndpoint)
                .then(function(resp){
                    $scope.$emit('emitSyncApiconfig');
                    var tmp = [resp.data.endpoint].concat($scope.endpointList);
                    $scope.endpointList = tmp;
                    $scope.newEndpoint.value = '';
                })
            }

        }
        $scope.onDelEndpoint = function(id) {
            jira.endpointDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncEndpointList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveEndpoint = function($index) {
            var endpoint = $scope.endpointList[$index]
            jira.endpointSave({
                id: endpoint.id,
                value: endpoint.value,
                // enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartJiraAuthCtrl', ['$scope', '$http', '$timeout', 'jira', function($scope, $http, $timeout, jira){
        $scope.syncAuthList = function(){        
            jira.getAuthList().then(function(resp){
                $scope.authList = resp.data.reverse();
            }).then(function(){
                $scope.$emit('emitSyncApiconfig');
            })
        }
        $scope.syncAuthList()
        $scope.newAuth = {};
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.onAddAuth = function(){
            var value = $scope.newAuth.value
            ;
            if (value) {
                jira.authAdd($scope.newAuth)
                .then(function(resp){
                    $scope.$emit('emitSyncApiconfig');
                    var tmp = [resp.data.auth].concat($scope.authList);
                    $scope.authList = tmp;
                    $scope.newAuth.value = '';
                    $scope.newAuth.name = '';
                })
            }
        }
        $scope.onDelAuth = function(id) {
            jira.authDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncAuthList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveAuth = function($index) {
            var auth = $scope.authList[$index]
            jira.authSave({
                id: auth.id,
                value: auth.value,
                name: auth.name,
                // enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartTlkApiCtrl', ['$scope', '$timeout', 'tlk', function($scope, $timeout, tlk){
        $scope.syncApiconfig = function(){        
            tlk.getAPIConfig().then(function(resp){        
                $scope.apiConfig = resp.data;
            })
        }
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.syncApiconfig();
        $scope.onSaveApiconfig = function(){
            tlk.saveApiconfig($scope.apiConfig)
            .then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
        $scope.$on('emitSyncApiconfig', $scope.syncApiconfig);
    }])
    .controller('chartTlkEndpointCtrl', ['$scope', '$http', '$timeout', 'tlk', function($scope, $http, $timeout, tlk){
        $scope.syncEndpointList = function(){        
            tlk.getEndpointList().then(function(resp){
                $scope.endpointList = resp.data.reverse();
            })
        }
        $scope.syncEndpointList()
        $scope.newEndpoint = {};
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.onSaveApiConfig = function(){
            tlk.saveAPIConfig($scope.apiConfig)
            .then(function(resp){
                console.log(resp.data);
            })
        }
        $scope.onAddEndpoint = function(){
            var value = $scope.newEndpoint.value
            ;
            if (value) {
                tlk.endpointAdd($scope.newEndpoint)
                .then(function(resp){
                    $scope.$emit('emitSyncApiconfig');
                    var tmp = [resp.data.endpoint].concat($scope.endpointList);
                    $scope.endpointList = tmp;
                    $scope.newEndpoint.value = '';
                })
            }

        }
        $scope.onDelEndpoint = function(id) {
            tlk.endpointDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncEndpointList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveEndpoint = function($index) {
            var endpoint = $scope.endpointList[$index]
            tlk.endpointSave({
                id: endpoint.id,
                value: endpoint.value,
                // enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartTlkApikeyCtrl', ['$scope', '$http', '$timeout', 'tlk', function($scope, $http, $timeout, tlk){
        $scope.syncApikeyList = function(){        
            tlk.getApikeyList().then(function(resp){
                $scope.apikeyList = resp.data.reverse();
            })
        }
        $scope.syncApikeyList()
        $scope.newApikey = {};
        $scope.showAlert = {
            saved: false,
            tested: false,
        }
        $scope.onAddApikey = function(){
            var value = $scope.newApikey.value
            ;
            if (value) {
                tlk.apikeyAdd($scope.newApikey)
                .then(function(resp){
                    $scope.$emit('emitSyncApiconfig');
                    var tmp = [resp.data.apikey].concat($scope.apikeyList);
                    $scope.apikeyList = tmp;
                    $scope.newApikey.value = '';
                    $scope.newApikey.name = '';
                })
            }
        }
        $scope.onDelApikey = function(id) {
            tlk.apikeyDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncApikeyList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveApikey= function($index) {
            var apikey = $scope.apikeyList[$index]
            tlk.apikeySave({
                id: apikey.id,
                value: apikey.value,
                name: apikey.name,
                // enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('chartTlkProductCtrl', ['$scope', '$http', '$timeout', 'tlk', function($scope, $http, $timeout, tlk){
        $scope.syncProuductList = function(){        
            tlk.getProductList().then(function(resp){
                $scope.productList = resp.data.reverse();
            })
        }
        $scope.syncProuductList();
        $scope.newProduct = {}
        $scope.showAlert = {
            saved: false,
            deleted: false,
        }
        $scope.onAddProduct = function(){
            var pd = $scope.newProduct.value,
                en = $scope.newProduct.enable || 'off'
            ;
            if (pd) {
                tlk.productAdd({
                    product: pd,
                    enable: en
                }).then(function(resp){
                    var tmp = [resp.data.product].concat($scope.productList);
                    $scope.productList = tmp
                    $scope.newProduct.value = '';
                    $scope.newProduct.enable = false;
                })
            } 
        }
        $scope.onDelProduct = function(id) {
            tlk.productDel(id).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.deleted = true;
                    $scope.syncProuductList();
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.deleted = false;})
                }, 2000)
            })
        }
        $scope.onSaveProduct = function($index) {
            var product = $scope.productList[$index]
            tlk.productSave({
                id: product.id,
                value: product.value,
                enable: product.enable
            }).then(function(resp){
                if (resp.data.success) {
                    $scope.showAlert.saved = true;
                }
            }).then(function(){
                $timeout(function(){
                    $scope.$apply(function(){$scope.showAlert.saved = false;})
                }, 2000)
            })
        }
    }])
    .controller('MainCtrl', ['$scope', '$rootScope', 'bugz', 'uiGridConstants',
        function($scope, $rootScope, bugz, uiGridConstants) {
            $rootScope.searchText = 'project';
            $scope.gridOptions = {
                showColumnFooter: true,
                enableGridMenu: true,
                enableSelectAll: true,
                exporterCsvFilename: 'myFile.csv',
                exporterPdfDefaultStyle: {
                    fontSize: 9
                },
                exporterPdfTableStyle: {
                    margin: [30, 30, 30, 30]
                },
                exporterPdfTableHeaderStyle: {
                    fontSize: 10,
                    bold: true,
                    italics: true,
                    color: 'red'
                },
                exporterPdfHeader: {
                    text: "My Header",
                    style: 'headerStyle'
                },
                exporterPdfFooter: function(currentPage, pageCount) {
                    return {
                        text: currentPage.toString() + ' of ' + pageCount.toString(),
                        style: 'footerStyle'
                    };
                },
                exporterPdfCustomFormatter: function(docDefinition) {
                    docDefinition.styles.headerStyle = {
                        fontSize: 22,
                        bold: true
                    };
                    docDefinition.styles.footerStyle = {
                        fontSize: 10,
                        bold: true
                    };
                    return docDefinition;
                },
                exporterPdfOrientation: 'portrait',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 500,
                exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                }
            };
            $scope.gridOptions.columnDefs = [];
            $rootScope.data = null;
            // 
            bugz.getQueryList().then(function(resp){
                return resp.data;
            }).then(function(query_list){
                var params = {
                    q: query_list,
                    cf: 'status',
                    rf: 'severity',
                }
                console.log(params)
                if (!params.q.length) return;
                showLoadingIcon();
                bugz.search(params).success(function(data) {
                    $rootScope.data = data;
                    $rootScope.getSearchText = function(){
                        var dataList = data.data_list, 
                            dataLen = dataList.length;
                        if (dataLen == 1){
                            return dataList[0].name;
                        } else {
                            return dataList.length + ' items';
                        }
                    }
                    // hideLoadingIcon();
                    var bug_list = data['data'],
                        headers = data["cols"];
                    $scope.gridOptions.columnDefs.push({
                        name: data.row_label,
                        headerCellClass: 'blue'
                    });
                    headers.forEach(function(e) {
                        $scope.gridOptions.columnDefs.push({
                            name: e,
                            aggregationType: uiGridConstants.aggregationTypes.sum,
                        });
                    })
                    $scope.gridOptions.data = bug_list;
                    do_set_pie(data, 'pie-cols');
                    do_set_pie(data, 'pie-rows');
                });
            })


            function initSeries(charts_data) {
                var ret = [];
                charts_data['cols'].forEach(function(val) {
                    ret.push({
                        barWidth: 30,
                        name: val,
                        type: "bar",
                        data: charts_data[val],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: function(c) {
                                        return c.data == 0 ? '' : c.data
                                    }
                                }
                            }
                        },
                    })
                })
                return ret;
            }

            function do_set(charts_data) {
                var myChart = echarts.init(document.getElementById('main'));
                var option = {
                    title: {
                        text: '',
                        textStyle: {
                            //文字颜色
                            color: 'black',
                            //字体风格,'normal','italic','oblique'
                            fontStyle: 'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight: 'bold',
                            //字体系列
                            fontFamily: 'sans-serif',
                            //字体大小
                            　　　　fontSize: 20
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: charts_data.timeline ? 　charts_data['timeline']['status'] : charts_data['cols']
                    },
                    toolbox: {
                        show: true,
                        orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
                        // 'horizontal' ¦ 'vertical'
                        x: 'right', // 水平安放位置，默认为全图右对齐，可选为：
                        // 'center' ¦ 'left' ¦ 'right'
                        // ¦ {number}（x坐标，单位px）
                        y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
                        // 'top' ¦ 'bottom' ¦ 'center'
                        // ¦ {number}（y坐标，单位px）
                        color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                        backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
                        borderColor: '#ccc', // 工具箱边框颜色
                        borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
                        padding: 5, // 工具箱内边距，单位px，默认各方向内边距为5，
                        showTitle: true,
                        feature: {
                            mark: {
                                show: true,
                                title: {
                                    mark: '辅助线-开关',
                                    markUndo: '辅助线-删除',
                                    markClear: '辅助线-清空'
                                },
                                lineStyle: {
                                    width: 1,
                                    color: '#1e90ff',
                                    type: 'dashed'
                                }
                            },
                            dataView: {
                                show: true,
                                title: 'data view',
                                readOnly: true,
                                lang: ['data view', 'close', 'refresh'],
                                optionToContent: function(opt) {
                                    var axisData = opt.xAxis[0].data;
                                    var series = opt.series;
                                    var table = '<table style="width:100%;text-align:center"><tbody><tr>' + '<td></td>' + '<td>' + series[0].name + '</td>' + '<td>' + series[1].name + '</td>' + '</tr>';
                                    for (var i = 0, l = axisData.length; i < l; i++) {
                                        table += '<tr>' + '<td>' + axisData[i] + '</td>' + '<td>' + series[0].data[i] + '</td>' + '<td>' + series[1].data[i] + '</td>' + '</tr>';
                                    }
                                    table += '</tbody></table>';
                                    return table;
                                }
                            },
                            magicType: {
                                show: true,
                                title: {
                                    bar: '柱形图',
                                    stack: '堆积',
                                    tiled: '平铺'
                                },
                                type: ['bar', 'stack', 'tiled']
                            },
                            restore: {
                                show: true,
                                title: '还原',
                                color: 'black'
                            },
                            saveAsImage: {
                                show: true,
                                title: '保存为图片',
                                type: 'jpeg',
                                lang: ['点击本地保存']
                            }
                        }
                    },
                    calculable: true,
                    // dataZoom : {
                    //     show : true,
                    //     realtime : true,
                    //     start : 20,
                    //     end : 80
                    // },
                    xAxis:
                    // [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: charts_data.timeline ? charts_data.timeline.date : charts_data['rows'],
                    },
                    // ],
                    yAxis: [{
                        type: 'value',
                        minInterval: 1,
                    }],
                    series: []
                }
                option['series'] = initSeries(charts_data)
                myChart.setOption(option);

            }
            function do_set_pie(charts_data, containerId) {
                var pie = charts_data.pie[containerId.split('-')[1]]
                var myChart = echarts.init(document.getElementById(containerId));
                var option = {
                    title : {
                        text: pie.text,
                        // subtext: 'statics from bugzilla',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    // legend: {
                    //     orient: 'vertical',
                    //     left: 'left',
                    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    // },
                    series : [
                        {
                            name: pie.text,
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data: pie.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{ 
                                    label:{ 
                                      show: true, 
                                      formatter: '{b} : {c} ({d}%)' 
                                    }, 
                                    labelLine :{show:true} 
                                  } 
                            }
                        }
                    ]
                };
                myChart.setOption(option);
            }
            function showLoadingIcon(text) {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                if (text === undefined) text = 'Loading...'
                $mask.fadeIn(200);
                $loadingIcon.show().find('#loading-hint').text(text)
            }

            function hideLoadingIcon() {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                $loadingIcon.hide()
                $mask.hide()
            }

        }
    ])
    .controller('IssueSummaryCtrl', ['$scope', 'bugz', 'uiGridConstants',
        function($scope, bugz, uiGridConstants) {
            $scope.gridOptions = {
                showColumnFooter: true,
                enableGridMenu: true,
                enableSelectAll: true,
                exporterCsvFilename: 'myFile.csv',
                exporterPdfDefaultStyle: {
                    fontSize: 9
                },
                exporterPdfTableStyle: {
                    margin: [30, 30, 30, 30]
                },
                exporterPdfTableHeaderStyle: {
                    fontSize: 10,
                    bold: true,
                    italics: true,
                    color: 'red'
                },
                exporterPdfHeader: {
                    text: "My Header",
                    style: 'headerStyle'
                },
                exporterPdfFooter: function(currentPage, pageCount) {
                    return {
                        text: currentPage.toString() + ' of ' + pageCount.toString(),
                        style: 'footerStyle'
                    };
                },
                exporterPdfCustomFormatter: function(docDefinition) {
                    docDefinition.styles.headerStyle = {
                        fontSize: 22,
                        bold: true
                    };
                    docDefinition.styles.footerStyle = {
                        fontSize: 10,
                        bold: true
                    };
                    return docDefinition;
                },
                exporterPdfOrientation: 'portrait',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 500,
                exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                }
            };
            $scope.gridOptions.columnDefs = [];
            // 
            bugz.getQueryList().then(function(resp){
                return resp.data;
            }).then(function(query_list){
                var params = {
                    q: query_list,
                    rf: 'status',
                    cf: 'severity',
                    aggr: 'ActiveDev',
                    atw: 1,
                }
                if (!params.q.length) return;
                // showLoadingIcon();
                bugz.search(params).success(function(data) {
                    hideLoadingIcon();
                    var bug_list = data['data'],
                        headers = data["cols"];
                    $scope.gridOptions.columnDefs.push({
                        name: data.row_label,
                        headerCellClass: 'blue'
                    });
                    headers.forEach(function(e) {
                        $scope.gridOptions.columnDefs.push({
                            name: e,
                            aggregationType: uiGridConstants.aggregationTypes.sum,
                        });
                    })
                    $scope.gridOptions.data = bug_list;
                    do_set(data);
                });

            })

            function initSeries(charts_data) {
                var ret = [];
                var data = charts_data['timeline']['series'];
                data.forEach(function(e) {
                    ret.push({
                        barWidth: 30,
                        name: e['name'],
                        type: "line",
                        data: e['data'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: function(c) {
                                        return c.data == 0 ? '' : c.data
                                    }
                                }
                            }
                        },
                    })
                })
                return ret;
            }

            function do_set(charts_data) {
                var myChart = echarts.init(document.getElementById('issue-summary'));
                var option = {
                    title: {
                        text: '',
                        textStyle: {
                            //文字颜色
                            color: 'black',
                            //字体风格,'normal','italic','oblique'
                            fontStyle: 'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight: 'bold',
                            //字体系列
                            fontFamily: 'sans-serif',
                            //字体大小
                            　　　　fontSize: 20
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: charts_data.timeline ? 　charts_data['timeline']['status'] : charts_data['cols']
                    },
                    toolbox: {
                        show: true,
                        orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
                        // 'horizontal' ¦ 'vertical'
                        x: 'right', // 水平安放位置，默认为全图右对齐，可选为：
                        // 'center' ¦ 'left' ¦ 'right'
                        // ¦ {number}（x坐标，单位px）
                        y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
                        // 'top' ¦ 'bottom' ¦ 'center'
                        // ¦ {number}（y坐标，单位px）
                        color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                        backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
                        borderColor: '#ccc', // 工具箱边框颜色
                        borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
                        padding: 5, // 工具箱内边距，单位px，默认各方向内边距为5，
                        showTitle: true,
                        feature: {
                            mark: {
                                show: true,
                                title: {
                                    mark: '辅助线-开关',
                                    markUndo: '辅助线-删除',
                                    markClear: '辅助线-清空'
                                },
                                lineStyle: {
                                    width: 1,
                                    color: '#1e90ff',
                                    type: 'dashed'
                                }
                            },
                            dataView: {
                                show: true,
                                title: 'data view',
                                readOnly: true,
                                lang: ['data view', 'close', 'refresh'],
                                optionToContent: function(opt) {
                                    var axisData = opt.xAxis[0].data;
                                    var series = opt.series;
                                    var table = '<table style="width:100%;text-align:center"><tbody><tr>' + '<td></td>' + '<td>' + series[0].name + '</td>' + '<td>' + series[1].name + '</td>' + '</tr>';
                                    for (var i = 0, l = axisData.length; i < l; i++) {
                                        table += '<tr>' + '<td>' + axisData[i] + '</td>' + '<td>' + series[0].data[i] + '</td>' + '<td>' + series[1].data[i] + '</td>' + '</tr>';
                                    }
                                    table += '</tbody></table>';
                                    return table;
                                }
                            },
                            magicType: {
                                show: true,
                                title: {
                                    bar: '柱形图',
                                    stack: '堆积',
                                    tiled: '平铺'
                                },
                                type: ['bar', 'stack', 'tiled']
                            },
                            restore: {
                                show: true,
                                title: '还原',
                                color: 'black'
                            },
                            saveAsImage: {
                                show: true,
                                title: '保存为图片',
                                type: 'jpeg',
                                lang: ['点击本地保存']
                            }
                        }
                    },
                    calculable: true,
                    dataZoom : {
                        show : true,
                        realtime : true,
                        start : 0,
                        end : 100
                    },
                    xAxis:
                    // [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: charts_data.timeline ? charts_data.timeline.date : charts_data['rows'],
                    },
                    // ],
                    yAxis: [{
                        type: 'value',
                        minInterval: 1,
                    }],
                    series: []
                }
                option['series'] = initSeries(charts_data)
                myChart.setOption(option);

            }

            function showLoadingIcon(text) {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                if (text === undefined) text = 'Loading...'
                $mask.fadeIn(200);
                $loadingIcon.show().find('#loading-hint').text(text)
            }

            function hideLoadingIcon() {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                $loadingIcon.hide()
                $mask.hide()
            }

        }
    ])
    .controller('testProgressGridCtrl', ['$scope', '$rootScope', '$timeout', 'tlk', 'uiGridConstants',
        function($scope, $rootScope, $timeout, tlk, uiGridConstants) {
            $scope.gridOptions = {
                showColumnFooter: true,
                enableGridMenu: true,
                enableSelectAll: true,
                exporterCsvFilename: 'myFile.csv',
                exporterPdfDefaultStyle: {
                    fontSize: 9
                },
                exporterPdfTableStyle: {
                    margin: [30, 30, 30, 30]
                },
                exporterPdfTableHeaderStyle: {
                    fontSize: 10,
                    bold: true,
                    italics: true,
                    color: 'red'
                },
                exporterPdfHeader: {
                    text: "My Header",
                    style: 'headerStyle'
                },
                exporterPdfFooter: function(currentPage, pageCount) {
                    return {
                        text: currentPage.toString() + ' of ' + pageCount.toString(),
                        style: 'footerStyle'
                    };
                },
                exporterPdfCustomFormatter: function(docDefinition) {
                    docDefinition.styles.headerStyle = {
                        fontSize: 22,
                        bold: true
                    };
                    docDefinition.styles.footerStyle = {
                        fontSize: 10,
                        bold: true
                    };
                    return docDefinition;
                },
                exporterPdfOrientation: 'portrait',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 500,
                exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                }
            }
            $scope.gridOptions.columnDefs = [];
            $scope.gridOptions.columnDefs.push({
                name: 'date',
                headerCellClass: 'blue'
            });
            var headers = ['Attempt', 'Blocked', 'Pass', "Fail"];
            headers.forEach(function(e) {
                $scope.gridOptions.columnDefs.push({
                    name: e,
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                });
            })
            for (var i = 0; i < 10; i++){
                var optName = "gridOptions" + i;
                $scope[optName] = angular.copy($scope.gridOptions);
                $scope[optName].columnDefs = [];
                $scope[optName].columnDefs.push({
                    name: 'date',
                    headerCellClass: 'blue'
                });
                headers.forEach(function(e) {
                    $scope[optName].columnDefs.push({
                        name: e,
                        // aggregationType: uiGridConstants.aggregationTypes.sum,
                    });
                })
            }
            // ---------------------------------------
            var tlkPjVal = $('[name="tlk-pj"]').val(),
                tlkPjPlanVal = $('[name="tlk-pj-plan"]').val()
            ;
            $rootScope.tlkPj = tlkPjVal || -1;
            $rootScope.tlkPjPlan = tlkPjPlanVal || -1;
            doSearch($rootScope.tlkPj, $('[name="vs"]').val());
            doSearchOnPlan($rootScope.tlkPjPlan);
            function doSearch(pj, vs) {
                tlk.search({
                    pj: pj,
                    vs: vs
                }).then(function(resp){
                    $rootScope.data = resp.data;
                    resp.data.progress_list.forEach(function(p, idx){
                        var optName = 'gridOptions' + idx;
                        $scope[optName].data = p.grid_data;
                        var timer = $timeout(function(){

                            // -----------------echarts-------------------------- 
                            var myChart = echarts.init(document.getElementById('echart-' + (idx + 1)));

                            function format_date(value, index) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return new Date(value).format("M/d")
                            }

                            var option = {
                                title: {
                                    text: p.project + ' Testing Progress'
                                },
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'cross',
                                        label: {
                                            backgroundColor: '#6a7985'
                                        }
                                    }
                                },
                                legend: {
                                    y: "top",
                                    right: 100,
                                    data: ['Plan', 'Pass', 'Attempt', 'Blocked', 'HC']
                                },
                                toolbox: {
                                    feature: {
                                        saveAsImage: {}
                                    },
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis: [{
                                    type: 'category',
                                    boundaryGap: false,
                                    data: p.dates,
                                    // data : function(){
                                    //     var now = +new Date("2016/05/09");
                                    //     var interval = 7 * 24 * 3600 * 1000;
                                    //     var end = new Date("2016/11/11");
                                    //     var ret = [(new Date(+now)).format("M/d")];
                                    //     while (true){
                                    //         now = new Date(+now + interval);
                                    //         if (now >= end) {
                                    //             ret.push(end.format('M/d'))
                                    //             break;
                                    //         }
                                    //         ret.push(now.format("M/d"))
                                    //     }
                                    //     return ret;
                                    // }(),
                                    axisLabel: {
                                        formatter: format_date,
                                        //X轴刻度配置
                                        // interval: 1 //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                                    }
                                }],
                                yAxis: [
                                    {
                                        max: 100,
                                        type: 'value',
                                        axisLabel: {
                                            formatter: function(val) {
                                                    return val + '%';
                                                }
                                                // formatter: '{value} %'
                                        },
                                    },
                                    {
                                        max: 10,
                                        type: 'value',
                                        axisLabel: {
                                            formatter: function(val) {
                                                    return val + 'HC';
                                                }
                                                // formatter: '{value} %'
                                        },
                                    },
                                ],
                                series: [{
                                        name: 'Attempt',
                                        type: 'line',
                                        stack: '总量',
                                        areaStyle: {
                                            normal: {
                                                color: 'red'
                                            }
                                        },
                                        lineStyle: {
                                            normal: {
                                                color: 'red'
                                            }
                                        },
                                        itemStyle: {
                                            normal: {
                                                color: 'red'
                                            }
                                        },
                                        data: p.Attempt
                                    }, {
                                        // min:6,
                                        name: 'Blocked',
                                        type: 'line',
                                        stack: '总量',
                                        // dataFilter: 'min',
                                        // label: {
                                        //               normal: {
                                        //                   show: true,
                                        //                   position: 'top'
                                        //               }
                                        //           },
                                        areaStyle: {
                                            normal: {
                                                color: 'yellow'
                                            }
                                        },
                                        lineStyle: {
                                            normal: {
                                                color: 'yellow'
                                            }
                                        },
                                        itemStyle: {
                                            normal: {
                                                color: 'yellow'
                                            }
                                        },
                                        data: p.Blocked
                                    }, {
                                        name: 'Pass',
                                        type: 'line',
                                        // stack: '总量',
                                        areaStyle: {
                                            normal: {
                                                color: 'green'
                                            }
                                        },
                                        lineStyle: {
                                            normal: {
                                                color: 'green'
                                            }
                                        },
                                        itemStyle: {
                                            normal: {
                                                color: 'green'
                                            }
                                        },
                                        data: p.Pass
                                    }, 
                                    {
                                        name: "Plan",
                                        type: "line",
                                        lineStyle: {normal: {color: 'blue'}},
                                        itemStyle: {
                                            normal: {
                                                color: 'blue',
                                                label: {
                                                    show: true,
                                                    position: 'top',
                                                    formatter: function(c) {
                                                        return c.data == 0 ? '' : c.data + '%'
                                                    }
                                                }
                                            },
                                        },
                                        // stack: '总量',
                                        // areaStyle: {normal: {}},
                                        data: p.percents,
                                        // smooth: true,
                                        // data: [0, 3.05, 6.44, 10.75, 15.06, 19.71, 24.35, 29.00, 33.64, 38.29, 42.93, 47.58, 52.22, 56.87, 61.51, 66.16, 70.74, 74.92, 78.90, 82.88, 86.53, 89.85, 92.90, 95.49, 97.88, 100.00, 100.00, 100.00]
                                    },{
                                        name: 'HC',
                                        type: "line",
                                        lineStyle: {normal: {color: 'red'}},
                                        yAxisIndex: 1,
                                        step: 'start',
                                        itemStyle: {
                                            normal: {
                                                color: 'red',
                                                label: {
                                                    show: true,
                                                    position: 'top',
                                                    formatter: function(c) {
                                                        return c.data == 0 ? '' : c.data + 'HC'
                                                    }
                                                }
                                            },
                                        },
                                        data: p.players

                                    }

                                ]
                            };
                            myChart.setOption(option);
                            // -----------------echarts-------------------------- 

                        }, 666);
                    })

                })
            }
            function doSearchOnPlan(pj){
                tlk.search({
                    pj: pj,
                }).then(function(resp){
                    $rootScope.oneProgress = resp.data.progress_list.length > 0 ? resp.data.progress_list[0] : null; 
                   $timeout(function(){
                       $(".flatpickr").flatpickr({
                            wrap: true,
                            dateFormat: "Y-m-d",
                        });
                        // 
                   },666) 
                })
            }
            var watch = $rootScope.$watch('tlkPj', function(newValue,oldValue, scope){
                if (newValue != oldValue) {
                    doSearch(newValue, 2);
                }
            });
            var watch2 = $rootScope.$watch('tlkPjPlan', function(newValue,oldValue, scope){
                if (newValue != oldValue) {
                    doSearchOnPlan(newValue);
                }
            });
        }
    ])
    .controller('jiraCtrl', ['$scope', '$rootScope', '$timeout', 'jira', 'uiGridConstants',
        function($scope, $rootScope, $timeout, jira, uiGridConstants) {
            $scope.gridOptions = {
                showColumnFooter: true,
                enableGridMenu: true,
                enableSelectAll: true,
                exporterCsvFilename: 'myFile.csv',
                exporterPdfDefaultStyle: {
                    fontSize: 9
                },
                exporterPdfTableStyle: {
                    margin: [30, 30, 30, 30]
                },
                exporterPdfTableHeaderStyle: {
                    fontSize: 10,
                    bold: true,
                    italics: true,
                    color: 'red'
                },
                exporterPdfHeader: {
                    text: "My Header",
                    style: 'headerStyle'
                },
                exporterPdfFooter: function(currentPage, pageCount) {
                    return {
                        text: currentPage.toString() + ' of ' + pageCount.toString(),
                        style: 'footerStyle'
                    };
                },
                exporterPdfCustomFormatter: function(docDefinition) {
                    docDefinition.styles.headerStyle = {
                        fontSize: 22,
                        bold: true
                    };
                    docDefinition.styles.footerStyle = {
                        fontSize: 10,
                        bold: true
                    };
                    return docDefinition;
                },
                exporterPdfOrientation: 'portrait',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 500,
                exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                }
            };
            $scope.gridOptions.columnDefs = [];
            $rootScope.data = null;
            // 
            var watch = $rootScope.$watch('jiraPj', function(newValue,oldValue, scope){
                if (newValue != oldValue) {
                    console.log(newValue)
                    doSearch(newValue, 2);
                }
            });
            showLoadingIcon();
            var jiraPjVal = $('[name="jira-pj"]').val()
            ;
            $rootScope.jiraPj = jiraPjVal || -1;
            doSearch($rootScope.jiraPj, $('[name="vs"]').val());
            function doSearch(pj, vs) {
                // if (vs == undefined) vs = 1;
                // if (pj.length == 0) pj = -1;
                // if (pj == -1) {
                //     hideLoadingIcon();
                //     return

                jira.search({
                    pj: pj,
                    vs: vs
                }).success(function(data) {
                    $rootScope.dataList = data.jiraData;
                    data.jiraData.forEach(function(data){
                        $timeout(function(){

                            for (var i = 0; i < data.data.length; i++) {
                                var d = data.data[i];
                                do_set_timeline(d, d.id);
                                do_set_assignee(d, d.id);
                            }
                        }, 666)
                    })
                    hideLoadingIcon();
                });
                    // var bug_list = data['data'],
                    //     headers = data["cols"];
                    // $scope.gridOptions.columnDefs.push({
                    //     name: data.row_label,
                    //     headerCellClass: 'blue'
                    // });
                    // headers.forEach(function(e) {
                    //     $scope.gridOptions.columnDefs.push({
                    //         name: e,
                    //         aggregationType: uiGridConstants.aggregationTypes.sum,
                    //     });
                    // })
                    // $scope.gridOptions.data = bug_list;
            }

            function initTimelineSeries(charts_data) {
                var ret = [];
                charts_data.timeline.series.forEach(function(val) {
                    ret.push({
                        barWidth: 30,
                        name: val.name,
                        type: "line",
                        data: val.data,
                        itemStyle: {
                            normal: {
                                color: val.color,
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: function(c) {
                                        return c.data == 0 ? '' : c.data
                                    }
                                }
                            }
                        },
                    })
                })
                return ret;
            }
            function initAssigneeSeries(charts_data) {
                // 
                var ret = [];
                charts_data.assignee.cols.forEach(function(val) {
                    ret.push({
                        name: val,
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: charts_data.assignee[val],
                        itemStyle: {
                            normal: {
                                color: charts_data.assignee.colors[val],
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: function(c) {
                                        return c.data == 0 ? '' : c.data
                                    }
                                }
                            }
                        },
                    })                    
                })
                return ret;
            }
            function do_set_timeline(charts_data, id) {
                var myChart = echarts.init(document.getElementById('jira-timeline-' + id));
                var option = {
                    title: {
                        text: '',
                        textStyle: {
                            //文字颜色
                            color: 'black',
                            //字体风格,'normal','italic','oblique'
                            fontStyle: 'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight: 'bold',
                            //字体系列
                            fontFamily: 'sans-serif',
                            //字体大小
                            　　　　fontSize: 20
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: charts_data.timeline.status,
                    },
                    calculable: true,
                    dataZoom : {
                        show : true,
                        realtime : true,
                        start : 0,
                        end : 100
                    },
                    xAxis:
                    // [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: charts_data.timeline.date,
                    },
                    // ],
                    yAxis: [{
                        type: 'value',
                        minInterval: 1,
                    }],
                    series: []
                }
                option['series'] = initTimelineSeries(charts_data)
                myChart.setOption(option);

            }

            function do_set_assignee(charts_data, id) {
                var panel = document.getElementById('jira-assignee-' + id);
                var myChart = echarts.init(panel);
                // var h = $(panel).height();
                // $(panel).height(20 * charts_data.assignee.cols.length);
                var option = {
                    title: {
                        text: '',
                        textStyle: {
                            //文字颜色
                            color: 'black',
                            //字体风格,'normal','italic','oblique'
                            fontStyle: 'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight: 'bold',
                            //字体系列
                            fontFamily: 'sans-serif',
                            //字体大小
                            　　　　fontSize: 20
                        }
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: charts_data.assignee.cols,
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'value',
                        minInterval: 1
                    },
                    yAxis: {
                        type: 'category',
                        data: charts_data.assignee.rows
                        
                    },
                    dataZoom : {
                        show : true,
                        realtime : true,
                        start : 0,
                        orient: 'vertical',
                        end : 50
                    },
                };
                option['series'] = initAssigneeSeries(charts_data)
                myChart.setOption(option);
            }
            function showLoadingIcon(text) {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                if (text === undefined) text = 'Loading...'
                $mask.fadeIn(200);
                $loadingIcon.show().find('#loading-hint').text(text)
            }

            function hideLoadingIcon() {
                var $mask = $('#mask'),
                    $loadingIcon = $('#loading-icon')
                $loadingIcon.hide()
                $mask.hide()
            }

        }
    ])
    .controller('perfCtrl', ['$scope', '$timeout', 'perf', function($scope, $timeout, perf){
        $scope.perfData = {};
        $scope.$watch('perfData', function(newValue,oldValue, scope){
            console.log(oldValue);
            console.log(newValue);
        })
        var updatePerfData = function(data) {
            console.log(data)
            $scope.perfData = data
            $timeout(function(){
                $scope.perfData.data.forEach(function(data, idx){
                    do_set(data.echartData, 'trend-iops-' + idx, idx)
                    do_set(data.echartData, 'trend-latency-' + idx, idx)
            })}, 666)
        }
        $scope.updatePerfData = function(data) {
            $scope.$apply(function(){
                updatePerfData(data);
            });
        }

        var a = $('[name="archive"]').val();
        if (a) {
            var respData = store.get(a)
            if (respData) {
               updatePerfData(respData);
            } else {            
                perf.getArchive(a).then(function(resp){
                    store.set(resp.data.filename, resp.data)
                    updatePerfData(resp.data);
                })            
            }
        }

        function do_set(charts_data, id, index) {
            var text = id.split('-')[1],
                key = text + '_data';
            function initSeries(charts_data) {
                var ret = [];
                var data = charts_data['series'];
                data.forEach(function(e) {
                    ret.push({
                        barWidth: 30,
                        name: e['name'],
                        type: "line",
                        data: e[key],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: function(c) {
                                        return c.data == 0 ? '' : c.data
                                    }
                                },
                                color: charts_data['color'][e['name']]
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: charts_data['color'][e['name']]
                            }
                        }
                    })
                })
                return ret;
            }
            var myChart = echarts.init(document.getElementById(id));
            var option = {
                title: {
                    text: text + '                        ' + $scope.perfData.gridDataList[index].key,
                    textStyle: {
                        //文字颜色
                        color: 'black',
                        //字体风格,'normal','italic','oblique'
                        fontStyle: 'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight: 'bold',
                        //字体系列
                        fontFamily: 'sans-serif',
                        //字体大小
                　　　　fontSize: 20,
                    },
                    padding: [0, 0, 0, 0]
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    padding: [30, 0, 0, 0],
                    data: charts_data.legend,
                    bottom: 10,
                    // orient: 'vertical'
                },
                calculable: true,
                dataZoom : {
                    show : true,
                    realtime : true,
                    start : 0,
                    end : 100,
                    orient: 'vertical',
                },
                xAxis:
                // [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: charts_data.xAxis,
                    axisLabel:{
                        formatter: function(val, index) {
                            if (index === 0) {
                              val += '(iodepth)'
                            }
                            return val;
                        }
                    }
                },
                // ],
                yAxis: [{
                    type: 'value',
                    minInterval: 1,
                    max: text == 'latency'? 100 : null,
                    // axisLabel: {                    
                    //     formatter: function(val, index) {

                    //     }
                    // }
                }],
                series: [],
                toolbox: {
                    show: true,
                    orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
                    // 'horizontal' ¦ 'vertical'
                    x: 'right', // 水平安放位置，默认为全图右对齐，可选为：
                    // 'center' ¦ 'left' ¦ 'right'
                    // ¦ {number}（x坐标，单位px）
                    y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
                    // 'top' ¦ 'bottom' ¦ 'center'
                    // ¦ {number}（y坐标，单位px）
                    color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                    backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
                    borderColor: '#ccc', // 工具箱边框颜色
                    borderWidth: 0, // 工具箱边框线宽，单位px，默认为0（无边框）
                    padding: [0, 25, 5, 5], // 工具箱内边距，单位px，默认各方向内边距为5，
                    showTitle: true,
                    feature: {                       
                        saveAsImage: {
                            show: true,
                            title: '保存为图片',
                            type: 'jpeg',
                            lang: ['点击本地保存']
                        },
                    }
                },
            }
            option['series'] = initSeries(charts_data)
            myChart.setOption(option);

        }
    }])
    ;
