MyProject
---------
This is a boilerplate project that uses HTML5Boilerplate project mixed with the DojoBoilerplate project to create a base to start from with addition of directories that I found nice.

Adding to this it also integrates:

- CoffeeScript compilation scripts
- Less compilation scripts
- Code coverage instrumentation scripts using jscoverage
- Complexity analysis using CCM
- Testing using D.O.H.
- Build script examples to minify and move it all to a release folder

All you need to do is:

1. Unpack it
2. Download Dojo source and put dojo, dijit, dojox and util in the src/lib directory (if you want code coverage you should copy it or link it to cov/lib as well)
3. Replace the runner.html in dojos util directory with the one in the patched files (it just adds a button to see code coverage from the tests)
4. Run the compileCoffeeMyLib.sh script to make the tests into Javascript
5. Hack away at the src/lib/mylib/app/App.js to load your own awesomeness
6. Profit!

When you want the tests to run, just run **runTests.html**.

When you want code coverage the run **jscoverage.sh** and go to **cov/runTests.html**. When the tests are done, click the button on top.

CCM only runs in windows.
The bat files and exes are there if you want to use this in windows.

Don't forget to keep line endings in the right format, depending on OS.

Setting up an envionment
-----------------
1. If in Windows, install cygwin from http://www.cygwin.com/install.html
2. Install node.js from http://nodejs.org/
3. Install SublimeText 2 from http://www.sublimetext.com/2
4. Install coffeescript by following 5 in windows or 6 otherwise:
5. in Windows open a cygwin shell and type: npm.cmd install -g coffee-script 
6. in *IX systems (yes OSX too) run: npm install -g coffee-script
7. copy the sublime-coffeescript folder from tools to the sublimetext package folder (in SublimText: Preferences -> Browse Packages…)
8. Google for other nice packages you need and install them too (such as TFS support, V8 engine etc)

Profit!

How to Contribute
-----------------
- Come with suggestions and bug reports

The licence file contains the MIT licence in case anyone wondered.
