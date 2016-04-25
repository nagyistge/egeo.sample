/*

  GruntJS task runner for Stratio Egeo Sample

  author: Alejandro Rodriguez (alejandrorodriguez@stratio.com)
  version: 0.1


  Tasks

  grunt sass-watch................Launch the doc task every time one Sass file changed
  grunt dist......................Generate the distributable content of the packate
  grunt serve.....................Launch a local webserver in http://localhost:9001
                                    to show the app
  grunt default...................Launch the dist task


  Plugins

  time-grunt......................Measure the time used in each subtask
  grunt-contrib-sass..............Sass compiler
  grunt-contrib-watch.............Watcher to automatize tasks if files changed
  grunt-contrib-clean.............Clean files and directories
  grunt-contrib-copy..............Copy files and directories
  grunt-contrib-concat............It join several files in an unique one
  grunt-contrib-uglify............It minifies Javascript files
  grunt-contrib-htmlmin...........It minifies the html files
  grunt-ng-annotate...............It creates a way to min-safe the AngularJS files

*/

'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  /*

    Configurable paths for the application

    Note that the bat command needs to be typed exactly as it will be executed, so
    it doesn't support the use of vars inside the command. Then, keep in mind that
    if you change the paths, you should check the bat command to ensure that all
    will be executed as expected. Check in the "batch" subtask.

  */
  var appConfig = {
    src: 'src',               // Folder of the source
    dist: 'dist',             // Folder of the distributable deliverables.
    vendors: 'vendors',       // Folder of the vendors not included in npm or bower
    npm: 'node_modules',       // Folder of the npm components
    egeoBase: 'vendors/egeo.ui.base/',        // Folder of the Egeo UI Base Framework
    assets: 'assets'
  };

  grunt.initConfig({
    // Set the paths to be available inside the grunt tasks
    app: appConfig,

    //Sass compile
    sass: {
      dist: {
        options: {
          sourceMap: 'auto',  // The sourcemaps are a way to map the compiled and
                              // minified files to let the browser to know when
                              // inspect code the original file and line we are
                              // inspecting
          outputStyle: 'compressed' // Minify the Sass as much as possible
        },
        files: {
          '<%= app.dist %>/css/index.css': 'src/sass/index.scss'
        }
      }
    },

    concat: {
      js: {
        files: {
          'dist/app.js': ['src/**/*.js'],
          'dist/with_extras.js': ['src/main.js', 'src/extras.js'],
        },
      },
    },

    /*

      Watch task to automatically refresh the documentation when any Sass file
      changes in any subfolder.

        Warning: Sometimes it fails on Windows due to the antivirus is checking
        the files and are blocked. So it is needed create another change in a
        Sass file to the watch repeat the task and write the compiled
        documentation properly.

    */
    watch: {
      sass: {
        files: ['<%= app.src %>/*.scss', '<%= app.src %>/**/*.scss'], // Files to watch
        tasks: ['dist'],                                               // Taks to execute when changes detected
        options: {
          spawn: true,  // If the spawn property is established to false, the
                        // system is faster but also  more prone to fail due to
                        // it opens a second thread to treat the files and can
                        // result in the warning explained above.
        },
      },
    },

    /* It cleans the files and folders */
    clean: {
      options: {
        force: true
      },
      dist: ['<%= app.dist %>'],
      temp: ['./dist/temp']
    },

    /* It creates a way to min-safe the AngularJS files  */
    ngAnnotate: {
        options: {
            singleQuotes: true
        },
        app: {
            files: {
                './dist/temp/js/min-safe/egeo.js': [
                                                    'node_modules/egeo.ui.kit/dist/egeo/providers/egeo.config.provider.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/factories/egeo.childrenclass.factory.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/button/components.button.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/button/components.button.controller.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/buttongroup/components.buttongroup.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/buttongroup/components.buttongroup.controller.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/row/components.row.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/toolbar/components.toolbar.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/form/components.form.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/formgroup/components.formgroup.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/label/components.label.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/input/components.input.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/input/components.input.controller.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/checkbox/components.checkbox.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/checkbox/components.checkbox.controller.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/combobox/components.combobox.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/combobox/components.combobox.controller.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/radiobutton/components.radiobutton.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/radiobutton/components.radiobutton.controller.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/helpbox/components.helpbox.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/header/components.header.directive.js',
                                                    'node_modules/egeo.ui.kit/dist/egeo/components/header/components.header.controller.js'
                                                  ],
                './dist/temp/js/min-safe/app.js': ['./src/js/*.js', './src/js/**/*.js']
            }
        }
    },

    /* It join several files in an unique one */
    concat: {
        js: { //target
            src: [
                  './node_modules/egeo.ui.kit/dist/egeo/vendors/jquery/jquery.min.js',
                  './node_modules/egeo.ui.kit/dist/egeo/vendors/angular/angular.min.js',
                  './node_modules/egeo.ui.kit/dist/egeo/vendors/angular-animate/angular-animate.min.js',
                  './node_modules/egeo.ui.kit/dist/egeo/vendors/angular-sanitize/angular-sanitize.min.js',
                  './node_modules/egeo.ui.kit/dist/egeo/vendors/angular-bind-html-compile/angular-bind-html-compile.js'
                ],
            dest: './dist/js/vendors.js'
        }
    },

    /* It minifies Javascript files */
    uglify: {
        app: { //target
            src: ['./dist/temp/js/min-safe/app.js'],
            dest: './dist/js/app.min.js'
        },
        egeo: { //target
            src: ['./dist/temp/js/min-safe/egeo.js'],
            dest: './dist/js/egeo.min.js'
        }
    },

    /* It minifies the html files */
    htmlmin: {
        app: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                removeEmptyAttributes: false,
                removeCommentsFromCDATA: false,
                removeRedundantAttributes: false,
                collapseBooleanAttributes: false
            },
            expand: true,
            cwd: './src',
            src: ['*.html', '**/*.html'],
            dest: './dist'
        },
        egeo: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                removeEmptyAttributes: false,
                removeCommentsFromCDATA: false,
                removeRedundantAttributes: false,
                collapseBooleanAttributes: false
            },
            expand: true,
            cwd: './node_modules/egeo.ui.kit/dist/egeo',
            src: ['*.html', '**/*.html'],
            dest: './dist/js/egeo'
        }
    },

    /* It copies the vendors needed to the documentation be viewed properly. */
    copy: {
      dist: {
        files: [
          // Includes assets within path and its sub-directories
          {expand: true, cwd: '<%= app.src %>', src: ['<%= app.assets %>/**/*', '<%= app.assets %>/*.html'], dest: '<%= app.dist %>'},
          // Includes font files within path and its sub-directories
          {expand: true, cwd: 'node_modules/egeo.ui.base/dist/egeo/vendors', src: ['fonts/**/*', 'fonts/*.html'], dest: '<%= app.dist %>/<%= app.assets %>'}
        ],
      }
    },

    /* It launches a local webserver to view the compiled documentation. */
    connect: {
      server: {
        options: {
          port: 9001,
          base: '<%= app.dist %>/<%= app.docs %>',
          keepalive: true
        }
      }
    }
  });

  // Load the npm tasks needed
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-ng-annotate');

  /*

    Define the tasks

  */
  grunt.registerTask('serve', [
    'connect'           // Launch the local webserver in http://localhost:9001
                        // to view the documentation
  ]);

  grunt.registerTask('sass-watch', [
    'watch:sass'        // Launch the doc task every time a Sass file changes
  ]);

  grunt.registerTask('dist', [
    'clean:dist', // Clean the directory to ensure all files are generated
             // from scratch
    'ngAnnotate',
    'concat',
    'uglify',
    'htmlmin',
    'copy:dist',  // Copy files needed
    'sass',   // Generate custom CSS to customize the documentation
    'clean:temp'
  ]);

  grunt.registerTask('default', [
    'dist'               // Generate the documentation
  ]);
};
