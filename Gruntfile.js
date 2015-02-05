module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs:{
      options: {
      },
      files: {
        src: ['test/**/*']
      }
    },
    express: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9999,
          server: './app/server.js'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['express', 'mocha_casperjs']);
  grunt.registerTask('server', ['express', 'express-keep-alive'])
};