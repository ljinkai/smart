module.exports = function (grunt) {
    grunt.registerTask('prod', [
        'compileAssets',
        'concat',
        'uglify',
        'cssmin',
        'sails-linker:prodStyle',
        'sails-linker:prodAppStyle',
        'sails-linker:prodJs'
    ]);
};
