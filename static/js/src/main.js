import filter from "./filter"
import config from "./config"
import service from "./service"
import ctrl from "./ctrl";
import component from "./component";
import router from "./router";

angular.module('app', [
    'ngAnimate',
    'ui.router',
    'base64',
    filter,
    ctrl,
    component,
    config,
    service,
])
angular.module('warehouse', [
    'ngAnimate',
    'ui.router',
    'base64',
    filter,
    ctrl,
    component,
    config,
    service,
    router,
])