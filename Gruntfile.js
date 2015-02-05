module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {},
      files: {
        src: ['test/**/*.js']
      }
    },
    express: {
      test: {
        options: {
          script: './app/server.js',
          hostname: 'localhost',
          port: 9999
        }
      },
      server: {
        options: {
          script: './app/server.js',
          hostname: 'localhost',
          port:9990
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['express:test','mocha_casperjs']);
  grunt.registerTask('server', ['express', 'express-keepalive']);
};