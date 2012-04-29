@rem set NODE_HOME=C:\Users\IBM_ADMIN\Downloads\node
@rem set PATH=%NODE_HOME%;%PATH%
@rem Something like this will be required for cygwin... node is not 100% confirmed working at this point
@rem node ../../dojo/dojo.js load=build %*

@rem sh prebuild.sh
java -Xms256m -Xmx256m  -cp lib/util/shrinksafe/js.jar;lib/util/closureCompiler/compiler.jar;lib/util/shrinksafe/shrinksafe.jar org.mozilla.javascript.tools.shell.Main  lib/dojo/dojo.js baseUrl=lib/dojo load=build --profile build.profile.js
@rem sh postbuild.sh


@rem java -classpath ../shrinksafe/js.jar;../shrinksafe/shrinksafe.jar org.mozilla.javascript.tools.shell.Main build.js %*

@rem java -Xms256m -Xmx256m -classpath ../shrinksafe/js.jar;../shrinksafe/shrinksafe.jar org.mozilla.javascript.tools.shell.Main  build.js %*
