define ["dojo/main", "util/doh/main", "mylib/app/App"], (dojo, doh, App) ->

    doh.register "mylib.tests.app.App", [

        name: "someFunctionality_someParameters_someExpectedResult"
        setUp: () -> 
            #Arrange
            @myApp = App
        runTest: (t) -> 
            #Act
            startExists = !!@myApp.start?
            #Assert
            doh.assertTrue startExists
        tearDown: () ->
            #nothing to clean up
    ]
