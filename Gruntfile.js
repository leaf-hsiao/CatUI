module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        stylus: {
            compile: {
                files: {
                    'min/cat.css': 'stylus/cat.styl', 
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/.../<%=pkg.file %>.js',
                dest: 'min/<%= pkg.file %>.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['uglify']);
}
