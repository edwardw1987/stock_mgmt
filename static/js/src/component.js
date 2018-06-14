import stockListHtml from "./partials/stock_list.html"
import stockFormHtml from "./partials/stock_form.html"
import stockFlowsHtml from "./partials/stock_flows.html"
import flowHtml from "./partials/flow.html"


export default 
angular.module('component', [])
.component('stockList', {
  template: stockListHtml,
  controller: 'stockCtrl'
})
.component('stockForm', {
  template: stockFormHtml,
  controller: 'stockCtrl'
})
.component('stockFlows', {
  template: stockFlowsHtml,
  controller: 'stockFlowsCtrl'
})
.component('flowinList', {
  template: flowHtml,
  controller: 'flowinCtrl'
})
.component('flowoutList', {
  template: flowHtml,
  controller: 'flowoutCtrl'
})
.name;