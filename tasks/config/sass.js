/**
 * Compiles SCSS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 */
module.exports = function(grunt) {

	grunt.config.set('sass', {
		dev: {
		    options: {
                sourcemap: 'none'
		    },
			files: [{
                expand: true,
                cwd: 'assets/styles/m/',
                src: ['**/*.scss'],
                dest: 'assets/styles/m/',
                ext: '.css'
            }]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
};
