const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

const entries = WebpackWatchedGlobEntries.getEntries(['./src/js/**/*.js'], {
	ignore: './src/js/**/_*.js',
})();

module.exports = () => ({
  entry: entries,

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `./js/[name].js`
  },

  plugins: [
    new CleanWebpackPlugin(),
		new WebpackWatchedGlobEntries(),
	]
});