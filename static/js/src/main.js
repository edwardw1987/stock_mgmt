import filter from "./filter"
import config from "./config"
import service from "./service"
import ctrl from "./ctrl";
import component from "./component";


angular.module('app', [
    'ngAnimate',
    'ui.router',
    filter,
    ctrl,
    component,
    config,
    service,
])