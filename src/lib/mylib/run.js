require({
    baseUrl: 'lib',

    packages: [
		{ name: 'dojo', location: 'dojo', packageMap: {} },
		{ name: 'dijit', location: 'dijit', packageMap: {} },
		{ name: 'dojox', location: 'dojox', packageMap: {} },
		{ name: 'mylib', location: 'mylib', packageMap: {} }
    ],

    // This is a hack. In order to allow app/main and app/run to be built together into a single file
    cache: {}
}, [ 'mylib' ]);