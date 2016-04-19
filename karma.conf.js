module.exports = function (config) {
  config.set({

    basePath: '',

    files: [
      'node_modules/egeo.ui.kit/dist/egeo/vendors/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/egeo.ui.kit/dist/egeo/vendors/angular-animate/angular-animate.js',
      'node_modules/egeo.ui.kit/dist/egeo/vendors/angular-bind-html-compile/angular-bind-html-compile.js',
      'node_modules/egeo.ui.kit/dist/egeo/vendors/angular-sanitize/angular-sanitize.js',
      'node_modules/egeo.ui.kit/dist/egeo/vendors/angular-translate/angular-translate.js',
      'node_modules/egeo.ui.kit/dist/egeo/vendors/jquery/jquery.js',

      'tests/app.js',
      'src/js/controllers/test.controller.js',

      // fixtures
      'tests/**/**/tests.*.js'
    ],

    exclude: [],

    autoWatch: false,

    reporters: ['junit', 'coverage', 'progress'],

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],
    port: 8080,

    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    junitReporter: {
      outputDir: 'dist/test-coverage/surefire-reports/',
      outputFile: undefined,
      suite: ''
    },

    coverageReporter: {
      type: "lcov",
      dir: 'dist/test-coverage',
      file: '../../lcovUT.info'
    },
    singleRun: true,
    logLevel: config.LOG_INFO
  });
};
