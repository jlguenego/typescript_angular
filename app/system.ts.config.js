console.log('system ts config js');
System.config({

    packages: {
        "plugin-typescript": {
            "main": "lib/plugin.js"
        },
        "typescript": {
            "main": "lib/typescript.js",
            "meta": {
                "lib/typescript.js": {
                    "exports": "ts"
                }
            }
        },
        "app": {
            "main": "./main.ts",
            "meta": {
                "./main.ts": {
                    format: "esm",
                    loader: "plugin-typescript"
                }
            },
        }
    },
    map: {
        "app": ".",
        "plugin-typescript": "npm:plugin-typescript",
        "typescript": "npm:typescript",
        'angular': 'npm:angular/angular.js',
    },
    paths: {
        // paths serve as alias
        'npm:': '../../node_modules/'
    },
    typescriptOptions: {}


});