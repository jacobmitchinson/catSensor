module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {},
      files: {
        src: ['test/features/**/*.js']
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
    },
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['test/spec/']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', ['express:test','mocha_casperjs']);
  grunt.registerTask('jasmine', ['jasmine_node']);
  grunt.registerTask('server', ['express', 'express-keepalive']);
};