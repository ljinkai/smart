/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

//	grunt.config.set('uglify', {
//		dist: {
//			src: ['.tmp/public/concat/production.js'],
//			dest: '.tmp/public/min/production.min.js'
//		},
//        home: {
//            src: ['.tmp/public/concat/production_home.js'],
//            dest: '.tmp/public/min/production_home.min.js'
//        }
//	});
    grunt.config.set('uglify', require('../pipeline').jsUglify());


    grunt.loadNpmTasks('grunt-contrib-uglify');
};
