'use strict'
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            js: ['Scripts/*.js', 'Scripts/*.js.map'],
            options: {
                force: true
            }
        },
        ts: {
            compileTwoSetsOfFilesUsingArrayStyle: {
                files: [{ src: ['Scripts/*.ts'], dest: 'Scripts/BulkScripts.js' }],
                options: {
                    fast: 'never'
                }
            }
        },
        uglify: {
            options: {
                force: false,
                sourceMap: false,
                mangle: false,
                compress: false,
                beautify: true
            },
            my_target: {
                files: {
                    'Scripts/BulkScripts.min.js': ['Scripts/BulkScripts.js']
                }
            }


        },

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('BuildCarb', ['clean', 'ts', 'uglify']);

};