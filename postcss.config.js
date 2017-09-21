module.exports = {
  plugins: [
		require('autoprefixer')({
			browsers: ['last 10 versions', 'IE >= 9', 'Safari >= 8', 'iOS >= 8', 'Android >= 4.4'],
			add: true,
			remove: true,
			flexbox: true,
		}),
	]
}