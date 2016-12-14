/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function(grunt) {

	grunt.config.set('less', {
		dev: {
			files: [{
				expand: true,
				cwd: 'assets/styles/web/',
				src: ['importer.less'],
				dest: '.tmp/public/styles/web/',
				ext: '.css'
			},
            {
                expand: true,
                cwd: 'assets/styles/app/',
                src: ['app.less'],
                dest: '.tmp/public/styles/app/',
                ext: '.css'
			},
            {
                expand: true,
                cwd: 'assets/styles/tr/',
                src: ['**/*.less'],
                dest: '.tmp/public/styles/tr/',
                ext: '.css'
            }]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
};
