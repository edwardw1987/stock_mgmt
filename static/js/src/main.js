import angular from 'angular';
import ngAnimate from "angular-animate";
import filter from "./filter"
import config from "./config"
import service from "./service"
import uiRouter from 'angular-ui-router';
import ctrl from "./ctrl";
import component from "./component";


angular.module('app', [
    ngAnimate,
    uiRouter,
    filter,
    ctrl,
    component,
    config,
    service,
])