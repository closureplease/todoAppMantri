/*jshint camelcase:false */
/*
 * Mantri • ember.js • TodoMVC
 * https://github.com/thanpolas/todoAppMantri
 *
 * Copyright (c) 2013 Tom Dale, Стас Сушков, Thanasis Polychronakis
 * Licensed under the MIT license.
 */

module.exports = function( grunt ) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  //
  // Grunt configuration:
  //
  //
  grunt.initConfig({
    mantriDeps: {
      options: {
        root: './'
      },
      todoApp: {
        src: 'js',
        dest: './deps.js'
      }

    },

    mantriBuild: {
      options: {
        debug: true
      },
      todoApp: {
        // src can be omitted as this is also the default value.
        src: 'mantriConf.json',
        dest: 'dist/build.js'
      }
    },

    watch: {
      todo: {
        files: ['js/**/*.js', 'mantriConf.json'],
        tasks: ['mantriDeps:todoApp']
      }
    },
    connect: {
      todoApp: {
        options: {
          port: 4242,
          base: './',
          keepalive: true
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.todoApp.options.port %>'
      }
    },

  })

  // Create shortcuts to main operations.
  grunt.registerTask('deps', ['mantriDeps:todoApp']);
  grunt.registerTask('build', ['mantriBuild:todoApp']);
  grunt.registerTask('server', [
    'open:server',
    'connect:todoApp'

    ]);

  // the default task, when 'grunt' is executed with no options.
  grunt.registerTask('default', 'server');

};

