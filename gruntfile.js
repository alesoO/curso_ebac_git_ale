module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css' : 'source/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'build/styles/main.min.css' : 'source/styles/main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'build/js/script.min.js' : 'source/js/script.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production', 'uglify']);
}