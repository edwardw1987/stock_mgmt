import angular from 'angular';
import ngAnimate from "angular-animate";
import filter from "./filter"
import ctrl from "./ctrl"
import config from "./config"
import service from "./service"
import uiRouter from 'angular-ui-router';


angular.module('app', [
    ngAnimate,
    uiRouter,
    filter,
    ctrl,
    config,
    service,
])