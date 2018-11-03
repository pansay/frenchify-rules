module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'src/*.js',
      'specs/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['browserify'],
      'specs/**/*.js': ['browserify'],
    },

    browserify: {
      extensions: ['.js'],
      transform: [
        'babelify',
      ],
    },


    // babelPreprocessor: {
    //   options: {
    //     presets: ['env'],
    //     sourceMap: 'inline'
    //   },
    //   filename: function (file) {
    //     return file.originalPath.replace(/\.js$/, '.es5.js');
    //   },
    //   sourceFileName: function (file) {
    //     return file.originalPath;
    //   }
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
      // 'Chrome',
      // 'Firefox',
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
