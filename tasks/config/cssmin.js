/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {
    var date = require('../pipeline').getTimeStamp();

    grunt.config.set('cssmin', {
        target: {
            files: require('../pipeline').cssMin()
        }
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
