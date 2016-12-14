//		'sails-linker:devTpl',
// 'sails-linker:devJsJade',
//'sails-linker:devStylesJade',
//    'sails-linker:devTplJade'

module.exports = function (grunt) {
	grunt.registerTask('linkAssets', [
		'sails-linker:devJs',
		'sails-linker:devStyle',
		'sails-linker:devAppStyle'
	]);
};
