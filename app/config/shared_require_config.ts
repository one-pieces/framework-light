/// <reference path='../../node_modules/node-shared-typescript-defs/requirejs/require.d.ts' />

// http://www.tuicool.com/articles/jam2Anv
(() => {
    requirejs.config({
        map: {
            '*': {
                css: 'vendor/require-css/css'
            }
        },
        paths: {
            angular: 'vendor/angular/angular',
            jquery: 'vendor/jquery/jquery',
            json: 'vendor/requirejs-plugins/json',
            require_config: 'config/require_config',
            shared_require_config: 'config/shared_require_config',
            text: 'vendor/requirejs-text/text',
            'ui.router': 'vendor/angular-ui-router/angular-ui-router'
        },
        shim: {
            angular: {
                deps: ['jquery'],
                exports: 'angular'
            },
            'ui.router': {
                deps: ['angular']
            }
        }
    });
})();