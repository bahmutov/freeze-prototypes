module.exports = function(grunt) {
    'use strict';

    var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg: pkg,

        concat: {
            options: {
                banner: '/**\n' + ' <%= pkg.name %>@<%= pkg.version %>\n' +
                    ' <%= pkg.description %>\n' +
                    ' <%= pkg.author %>\n' +
                    ' <%= pkg.homepage %>\n' +
                    '*/\n\n'
            },
            js: {
                src: ['index.js'],
                dest: 'dist/freeze-prototypes.js'
            },
        }
    });

    var plugins = require('matchdep').filterDev('grunt-*');
    plugins.forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['concat']);
};
