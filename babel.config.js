module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
			  	'module-resolver',
			  	{
					alias: {
						'@components': './src/components/index.ts',
						'@screens': './src/screens',
						'@utils': './src/utils',
						'@assets': './src/assets',
						'@constants': './src/constants',
						'@services': './src/services',
						'@store': './src/store',
						'@hooks': './src/hooks',
						'@navigators': './src/navigators',
						'@hoc': './src/hoc',
						'@config': './src/config'
					}
			  	}
			]
		]
	};
};
