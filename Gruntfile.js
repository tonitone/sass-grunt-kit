module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            app: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'app/css/app.min.css': 'app/scss/app.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'app/scss/**/*.scss',
                tasks: 'sass'
            },
            js: {
                files: 'app/js/**/*.js',
                tasks: ['copy:js', 'uglify']
            },
            html: {
                files: 'app/*.html',
                tasks: 'copy:html'
            }
        },
        copy: {
            html: {src: 'app/index.html', dest: 'dist/index.html'},
            img: {expand: true, cwd: 'app/img/', src: ['**'], dest: 'dist/img/'},
            js: {expand: true, cwd: 'app/js/', src: ['**'], dest: 'dist/js/'},
            css: {expand: true, cwd: 'app/css/', src: ['**'], dest: 'dist/css/'}
        },
        browserSync: {
            defaultOptions: {
                src: [
                    'dist/css/**/*.css',
                    'dist/js/**/*.js',
                    'dist/index.html'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./dist/"
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'app/js/app.min.js': [
                        'app/js/libs/*',
                        'app/js/app.js'
                    ]
                }
            },
            options: {
                sourceMap: true,
                mangle: false,
                sourceMapName: 'app/js/app.js.map'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['devWatch']);
    grunt.registerTask('watch-dev', ['sass', 'uglify', 'watch']);
    grunt.registerTask('watch-live', ['clean', 'copy', 'sass', 'browserSync', 'watch']);

    grunt.registerTask('build', ['clean', 'sass', 'uglify', 'copy']);

    grunt.registerTask('clean', 'delete your dist/-folder', function () {
        if(grunt.file.delete('dist')) {
            console.log('dist/-folder deleted!');
        }
    });

};
