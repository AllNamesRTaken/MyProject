var profile = (function () {
    var copyOnly = function(filename) {
        return filename in {
            'some/mid/file': 1
        };
    };

    var jsFile = /\.js$/;
    var cssFile = /\.css$/;
    var htmlFile = /\.html$/;
    var imgFile = /\.png$/;
    var testFile = /\/tests\//;
    // Resource tags are functions that provide hints to the compiler about a given file. The first argument is the
    // filename of the file, and the second argument is the module ID for the file.
    return {
        resourceTags: {
            // Files that contain test code.
            test: function (filename, mid) {
                return testFile.test(filename);
            },

            // Files that should be copied as-is without being modified by the build system.
            copyOnly: function (filename, mid) {
                return copyOnly(mid);
            },

            // Files that are AMD modules.
            amd: function (filename, mid) {
                return jsFile.test(filename);
            },

            ignore: function (filename, mid) {
                return !jsFile.test(filename) &&
                    !cssFile.test(filename) && 
                    !htmlFile.test(filename) && 
                    !imgFile.test(filename) && 
                    !testFile.test(filename);
            },

            // Files that should not be copied when the “mini” compiler flag is set to true.
            miniExclude: function (filename, mid) {
                return testFile.test(filename);
            }
        },
        trees:[
            [".", ".", /(\/\.)|(~$)/]
        ]
    };
}());