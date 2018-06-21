import stockListHtml from "./partials/stock_list.html"
import stockFormHtml from "./partials/stock_form.html"
import stockFlowsHtml from "./partials/stock_flows.html"
import flowHtml from "./partials/flow.html"
import passwordFormHtml from "./partials/settings_password.html"
import settingsHtml from "./partials/settings.html"
import sidebarHtml from "./partials/sidebar.html"
import warehouseFormHtml from "./partials/warehouse_form.html"
import confirmModalHtml from "./partials/confirm_modal.html"
import uploadModalHtml from "./partials/upload_modal.html"
import stocktakeHtml from "./partials/stocktake.html"
import stocktakeNewHtml from "./partials/stocktake_new.html"
import stocktakeDetailHtml from "./partials/stocktake_detail.html"


export default 
angular.module('component', [])
.component('stockList', {
  template: stockListHtml,
  controller: 'stockListCtrl',
  bindings: {
      sidebarOpen: "<",
  } 
})
.component('stockForm', {
  template: stockFormHtml,
  controller: 'stockFormCtrl'
})
.component('stockFlows', {
  template: stockFlowsHtml,
  controller: 'stockFlowsCtrl'
})
.component('flowinList', {
  template: flowHtml,
  controller: 'flowinCtrl',
  bindings: {
      sidebarOpen: "<",
  } 
})
.component('flowoutList', {
  template: flowHtml,
  controller: 'flowoutCtrl',
  bindings: {
      sidebarOpen: "<",
  } 
})
.component('changepasswordform', {
  template: passwordFormHtml,
  controller: 'changepasswordCtrl'
})
.component('settingsNav', {
  template: settingsHtml,
})
.component('sidebar', {
  template: sidebarHtml,
})
.component('warehouseForm', {
  template: warehouseFormHtml,
  controller: 'warehouseFormCtrl'
})
.component('confirmModal', {
  template: confirmModalHtml,
  controller: 'confirmModalCtrl',
})
.component('uploadModal', {
  template: uploadModalHtml,
  controller: 'uploadModalCtrl',
})
.component('stocktake', {
  template: stocktakeHtml,
  controller: 'stocktakeCtrl',
  bindings: {
      sidebarOpen: "<",
  } 
})
.component('stocktakeNew', {
  template: stocktakeNewHtml,
  controller: ''
})
.component('stocktakeDetail', {
  template: stocktakeDetailHtml,
  controller: ''
})
.name;