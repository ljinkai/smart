module.exports = function (grunt) {
//	grunt.registerTask('default', ['compileAssets', 'linkAssets',  'watch']);
	grunt.registerTask('default',
        [
          'compileAssets',
          'sails-linker:devStyle',
          'sails-linker:devAppStyle',
          'sails-linker:devJs',
          'watch'
        ]);

};
