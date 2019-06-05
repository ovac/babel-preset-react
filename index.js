module.exports = () => {
	return {
		presets: [
			'@babel/preset-react',
			['@babel/preset-env', { targets: { browsers: ['last 2 versions'] }, loose: true, modules: false }],
			'@babel/preset-flow'
		],
		plugins: [
			['@babel/plugin-proposal-decorators', { legacy: true }],
			'@babel/plugin-transform-flow-strip-types',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-proposal-optional-chaining',
			'@babel/plugin-proposal-object-rest-spread',
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-proposal-export-namespace-from',
			'@babel/plugin-proposal-export-default-from',
			['module-resolver', { alias: {} }]
		]
	};
};
