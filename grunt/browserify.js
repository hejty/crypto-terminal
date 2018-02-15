'use strict';

module.exports = {
	bigi: {
		options: {
			standalone: 'BigInteger'
		},
		src: 'node_modules/bigi/lib/index.js',
		dest: 'build/bigi.js'
	},
	bs58: {
		options: {
			standalone: 'bs58'
		},
		src: 'node_modules/bs58/index.js',
		dest: 'build/bs58.js'
	},
	buffer: {
		options: {
			standalone: 'Buffer'
		},
		src: 'exports/buffer.js',
		dest: 'build/buffer.js'
	},
	ecurve: {
		options: {
			standalone: 'ecurve'
		},
		src: 'node_modules/ecurve/lib/index.js',
		dest: 'build/ecurve.js'
	},
	querystring: {
		options: {
			standalone: 'querystring'
		},
		src: 'exports/querystring.js',
		dest: 'build/querystring.js'
	}
};
