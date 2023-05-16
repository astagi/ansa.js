// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';


export default {
	input: 'index.js',
	output: {
		file: 'bundle.js',
		format: 'umd',
        name: 'Ansa',
	},
	plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};