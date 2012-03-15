require({
    baseUrl: 'lib',

    packages: [
		{ name: 'dojo', location: 'dojotoolkit/dojo', packageMap: {} },
		{ name: 'dijit', location: 'dojotoolkit/dijit', packageMap: {} },
		{ name: 'dojox', location: 'dojotoolkit/dojox', packageMap: {} },
		{ name: 'mylib', location: 'mylib', packageMap: {} }
    ],

    // This is a hack. In order to allow app/main and app/run to be built together into a single file
    cache: {}
}, [ 'mylib' ]);