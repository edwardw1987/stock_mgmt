import filter from "./filter"
import config from "./config"
import service from "./service"
import ctrl from "./ctrl";
import component from "./component";


angular.module('app', [
    'ngAnimate',
    'base64',
    filter,
    ctrl,
    component,
    config,
    service,
])