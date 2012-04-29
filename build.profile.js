/**
 * This is a new Dojo 1.7 style build profile. Look at util/build/buildControlDefault.js if you want to explore the
 * default Dojo build profile options.
 */

var profile = (function(){
    var copyOnly = function(filename) {
        return filename in {
            'some/mid/file': 1
        };
    };
    var jsFile = /\.js$/;
    var minified = /\.min\./;
    var testFile = /\/tests\//;
    var build = /\.profile\.js|\.package\.js/;
    var packageinfo = /package.json/;

    return {
        //releaseDir: '../release',
        basePath: '.', 
        action: 'release',
        cssOptimize: 'comments',
        stripConsole: 'all',//'normal',
        mini: true,
        selectorEngine: "lite",//"acme",

        defaultConfig:{
            hasCache:{
                // these are the values given above, not-built client code may test for these so they need to be available
                'dojo-built':1,
                'dojo-loader':1,
                'dom':1,
                'host-browser':1,

                // default
                "config-selectorEngine":"lite"
            },
            async:1
        },

        dojoBootText:"require.boot && require.apply(null, require.boot);",

        // since this build it intended to be utilized with properly-expressed AMD modules;
        // don't insert absolute module ids into the modules
        insertAbsMids:0,

        // Uses Closure Compiler as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe.
        // Note that you will probably get some “errors” with CC; these are generally safe to ignore, and will be
        // fixed in a later version of Dojo. This defaults to "" (no compression) if not provided.
        optimize: 'closure',
        layerOptimize: 'closure',

        // these are all the has feature that affect the loader and/or the bootstrap
        // the settings below are optimized for the smallest AMD loader that is configurable
        // and include dom-ready support
        staticHasFeatures:{
            // dojo/dojo
            'config-dojo-loader-catches':0,

            // dojo/dojo
            'config-tlmSiblingOfDojo':0,

            // dojo/dojo
            'dojo-amd-factory-scan':0,

            // dojo/dojo
            'dojo-combo-api':0,

            // dojo/_base/config, dojo/dojo
            'dojo-config-api':1,

            // dojo/main
            'dojo-config-require':0,

            // dojo/_base/kernel
            'dojo-debug-messages':0,

            // dojo/dojo
            'dojo-dom-ready-api':1,

            // dojo/main
            'dojo-firebug':0,

            // dojo/_base/kernel
            'dojo-guarantee-console':1,

            // dojo/has
            'dojo-has-api':1,

            // dojo/dojo
            'dojo-inject-api':1,

            // dojo/_base/config, dojo/_base/kernel, dojo/_base/loader, dojo/ready
            'dojo-loader':1,

            // dojo/dojo
            'dojo-log-api':0,

            // dojo/_base/kernel
            'dojo-modulePaths':0,

            // dojo/_base/kernel
            'dojo-moduleUrl':0,

            // dojo/dojo
            'dojo-publish-privates':0,

            // dojo/dojo
            'dojo-requirejs-api':0,

            // dojo/dojo
            'dojo-sniff':0,

            // dojo/dojo, dojo/i18n, dojo/ready
            'dojo-sync-loader':0,

            // dojo/dojo
            'dojo-test-sniff':0,

            // dojo/dojo
            'dojo-timeout-api':0,

            // dojo/dojo
            'dojo-trace-api':0,

            // dojo/dojo
            'dojo-undef-api':0,

            // dojo/i18n
            'dojo-v1x-i18n-Api':1,

            // dojo/_base/xhr
            'dojo-xhr-factory':0,

            // dojo/_base/loader, dojo/dojo, dojo/on
            'dom':1,

            // dojo/dojo
            'host-browser':1,

            // dojo/_base/array, dojo/_base/connect, dojo/_base/kernel, dojo/_base/lang
            'extend-dojo':1
        },

        resourceTags: {
            amd: function (filename, mid) {
                return jsFile.test(filename);
            },
            test: function (filename, mid) {
                return testFile.test(filename);
            },
            copyOnly: function (filename, mid) {
                return minified.test(filename) || copyOnly(filename);
            },
            miniExclude: function (filename, mid) {
                return testFile.test(filename);
            }
        },

    	packages: [
    		{
    			name: 'dojo',
    			location: 'lib/dojo',
    			destLocation: 'lib/dojo'
    		},
    		{
    			name: 'dijit',
    			location: 'lib/dijit',
    			destLocation: 'lib/dijit'
    		},
    		{
    			name: 'dojox',
    			location: 'lib/dojox',
    			destLocation: 'lib/dojox'
    		},
            /*{
                name: 'clazzy',
                location: 'lib/clazzy',
                destLocation: 'lib/clazzy'
            },
            {
                name: 'mizuhiki',
                location: 'lib/mizuhiki',
                destLocation: 'lib/mizuhiki'
            },*/
    		{
    			name: 'mylib',
    			location: 'lib/mylib',
    			destLocation: 'lib/mylib'
            }
    	],
    	trees: [
    		['./lib/modernizr', './lib/modernizr'],
    		['./resources', './resources', /.*(\.less)$/]
    	],
    	files: [
    		['404.html', '404.html'],
            ['index.html', 'index.html']
    	],
    	

        // Builds can be split into multiple different JavaScript files called “layers”. This allows applications to
        // defer loading large sections of code until they are actually required while still allowing multiple modules to
        // be compiled into a single file.
        layers: {
            'dojo/dojo': {
                include: [],
                boot: 1,
                customBase: 1
            },
            "dojo/main":{
                include:["dojo/selector/lite"]
            },
            'wi/run': { 
    			include: [ 
                    'wi/run', 
                    'wi/main', 
                    "wi/app/App", 
                    "wi/app/AppUI", 
                    'clazzy/Clazzy',
                    'clazzy/IoC',
                    'clazzy/TemplateRegistry',
                    'mizuhiki/Mizuhiki',
                    'wi/interfaces/module',
                    'wi/lib/module',
                    'wi/services/module',
                    'wi/namelocators/module',
                    'wi/uielements/module'
                ],
    		}
        }
    };
}());