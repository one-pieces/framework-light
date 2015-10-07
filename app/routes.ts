/// <reference path='./app.d.ts' />
/// <amd-dependency path='ui.router' />

import angular = require('angular');
import home = require("./features/home/home");

'use strict';

export var moduleName = 'framework.routes';

angular.module(moduleName, ['ui.router', home.moduleName])
    .config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
        $stateProvider
            .state('framework', {
                url: '/framework/home',
                template: home.template,
                controller: home.controllerName
            });
    }]);