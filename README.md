MyProject
---------
This is a boilerplate project that uses HTML5Boilerplate project mixed with the DojoBoilerplate project to create a base to start from with addition of directories that I found nice.

Adding to this it also integrates:

- CoffeeScript compilation scripts
- Less compilation scripts
- Code coverage instrumentation scripts using jscoverage
- Complexity analysis using CCM
- Testing using D.O.H.

All you need to do is:

1. Unpack it
2. Download Dojo source and put dojo, dijit, dojox and util in the src/lib/dojotoolkit directory (if you want code coverage you should copy it or link it to cov/lib/dojotoolkit as well)
3. Replace the runner.html in dojos util directory with the one in the patched files (it just adds a button to see code coverage from the tests)
4. Run the compileCoffeeMyLib.sh script to make the tests into Javascript
5. Hack away at the src/lib/mylib/app/App.js to load your own awesomeness
6. Profit!

When you want the tests to run, just run **runTests.html**.

When you want code coverage the run **jscoverage.sh** and go to **cov/runTests.html**. When the tests are done, click the button on top.

CCM only runs in windows.
The bat files and exes are there if you want to use this in windows.

Don't forget to keep line endings in the right format, depending on OS.

How to Contribute
-----------------
- Come with suggestions and bug reports
- Help me set up a good build script that compiles it into the release directory with a resonable setup for layers etc, preferably with good motivations of the choices.

The licence file contains the MIT licence in case anyone wondered.