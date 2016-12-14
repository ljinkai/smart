module.exports = function (grunt) {
//    'bower:install',
//		'jst:dev',

    grunt.registerTask('compileAssets', [
//    	'bower:install',
		'clean:dev',
		'less:dev',
		// 'sass:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
