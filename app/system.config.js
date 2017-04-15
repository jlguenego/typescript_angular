(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '../../node_modules/'
        },
        map: {
            // angular bundles
            'angular': 'npm:angular/angular.js',
        },
        packages: {

            '.': {
                defaultExtension: 'js',
            },
            '..': {
                defaultExtension: 'js',
            }
        }
    });
})(this);
