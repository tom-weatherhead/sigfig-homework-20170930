// sigfig-homework-20170930/Gruntfile.js

'use strict';

module.exports = function (grunt) {
	const packageJsonFilename = 'package.json';
	const packageJsonContents = grunt.file.readJSON(packageJsonFilename);

	grunt.initConfig({
		pkg: packageJsonContents,
		eslint: {
			target: [
				'*.js',
				'src/*.js',
				'test/*.js'
			]
		},
		mochaTest: {
			options: {
				reporter: 'spec'
			},
			test: {
				src: ['test/*_spec.js']
			}
		},
		nsp: {
			package: packageJsonContents
		}
	});

	// Tasks:
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-nsp');

	// Aliases:
	grunt.registerTask('test', ['eslint', 'mochaTest', 'nsp']);
	grunt.registerTask('default', ['test']);
};
