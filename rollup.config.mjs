// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import uglify from '@lopatnov/rollup-plugin-uglify'


export default {
	input: 'index.js',
	output: {
		file: 'bundle.js',
		format: 'umd',
        name: 'Ansa',
		compact: true
	},
	plugins: [resolve(), babel({ babelHelpers: 'bundled' }, uglify())]
};