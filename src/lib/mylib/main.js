define([ 'dojo/has', 'require', 'dojo'], function (has, require, dojo) {
    var app = {};

    if (has('host-browser')) {
		dojo.create('div', {
			id: 'loadingOverlay',
			'class': 'pageOverlay',
			innerHTML: '<div class="loadingMessage">Loading...</div>'
		}, dojo.body());
		
		require(['mylib/app/App'], function (app)
		{
			(window.App = app).start();
		});
    }
    else {
        log('No browser available!');
    }
});