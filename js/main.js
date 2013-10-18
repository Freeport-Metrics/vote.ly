// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    jqueryui: 'libs/jqueryui/jquery-ui.min',
    jqueryuiwidget: 'libs/jqueryui/jquery.ui.widget.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    jtable: 'libs/jtable/jquery.jtable.min',
    templates: '../templates'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
