import stockListHtml from "./partials/stock_list.html"
import stockFormHtml from "./partials/stock_form.html"
import stockFlowsHtml from "./partials/stock_flows.html"
import flowHtml from "./partials/flow.html"
import passwordFormHtml from "./partials/settings_password.html"
import settingsHtml from "./partials/settings.html"


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
.component('changepasswordform', {
  template: passwordFormHtml,
  controller: 'changepasswordCtrl'
})
.component('settingsNav', {
  template: settingsHtml,
})
.name;