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
    var minified = /\.min\./;
    var testFile = /\/tests\//;
    var build = /\.profile\.js|\.package\.js/;
    var packageinfo = /package.json/;

    return {
        //releaseDir: '../release',
        basePath: '.', 
        action: 'release',
        cssOptimize: 'comments',
        stripConsole: 'all',
        mini: true,

        // Uses Closure Compiler as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe.
        // Note that you will probably get some “errors” with CC; these are generally safe to ignore, and will be
        // fixed in a later version of Dojo. This defaults to "" (no compression) if not provided.
        optimize: 'closure',
        layerOptimize: 'closure',

        resourceTags: {
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
                //include: [ 'dojo/dojo']
                boot: true,
                customBase: true
            },

            'mylib/run': { 
    			include: [ 'mylib/run', 'mylib/main', 'mylib/app/App'],
    		}
        },

        // Providing hints to the build system allows code to be conditionally removed on a more granular level than
        // simple module dependencies can allow. This is especially useful for creating tiny mobile builds.
        // Keep in mind that dead code removal only happens in minifiers that support it! Currently, ShrinkSafe does not
        // support dead code removal; Closure Compiler and UglifyJS do.
        staticHasFeatures: {
            // The trace & log APIs are used for debugging the loader, so we don’t need them in the build
            'dojo-trace-api':0,
            'dojo-log-api':0,

            // This causes normally private loader data to be exposed for debugging, so we don’t need that either
            'dojo-publish-privates':0,

            // We’re fully async, so get rid of the legacy loader
            'dojo-sync-loader':0,

            // We aren’t loading tests in production
            'dojo-test-sniff':0
        }
    };
}());