var webpack = require('webpack');
var getConfig = require('hjs-webpack');

var config = getConfig({
  // entry point for the app
  in: 'src/index.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'dist',

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true,

  html: function (context) {
  	//var version = require("./package.json").version;
	  return {
	    'index.html': context.defaultTemplate({html: '<div id="app"></root><script src="/vendors.js"></script>'})
	  }
	}
});

config.resolve.alias = { jquery:'jquery/dist/jquery.min.js' };
config.resolve.alias = { bootstrapJs:'bootstrap/dist/js/bootstrap.min.js' };
config.plugins.push(
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery':'jquery'
  }),
  new webpack.ProvidePlugin({
    bootstrapJs: 'bootstrapJs'
  }),
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
);
config.entry = {
  // Add entries for vendors
  vendors: ['jquery'],
  // Reassign previous single entry to main entry
  main: config.entry
};

module.exports = config;