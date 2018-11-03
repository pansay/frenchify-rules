module.exports = function(config) {
  config.set({

    basePath: '',
    port: 9876,
    autoWatch: false,
    singleRun: true,
    colors: true,

    frameworks: [
      'jasmine',
      'browserify',
    ],

    files: [
      'src/*.js',
      'specs/*.js',
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

    reporters: [
      'progress',
    ],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    browsers: [
      'PhantomJS',
      // 'Chrome',
      // 'Firefox',
    ],
  })
}
