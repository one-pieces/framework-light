// http://www.tuicool.com/articles/jam2Anv
(function() {
    requirejs.config({
        paths: {
            angular: 'vendor/angular/angular',
            'ui.router': 'vendor/angular-ui-router/angular-ui-router',
            jquery: 'vendor/jquery/jquery',
            shared_require_config: 'config/shared_require_config'
        },
        wrapShim: true,
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