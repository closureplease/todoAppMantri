/*jshint camelcase:false */
/*
 * Mantri • ember.js • TodoMVC
 * https://github.com/thanpolas/todoAppMantri
 *
 * Copyright (c) 2013 Thanasis Polychronakis,
 *     Tom Dale, Стас Сушков
 * Licensed under the MIT license.
 */

module.exports = function( grunt ) {
  'use strict';

  grunt.loadNpmTasks('mantri');

  //
  // Grunt configuration:
  //
  //
  grunt.initConfig({
    // Project configuration
    // ---------------------
    //
    mantriDeps: {
      options: {

      },
      todoApp: {
        src: './',
        dest: './deps.js'
      }

    },

    mantriBuild: {
      options: {

      },
      todoApp: {
        src: 'test/todoApp/mantriConf.json',
        dest: 'test/todoApp/js/dist/build.js'
      }
    },

    watch: {
      todo: {
        files: ['js/**/*.js', 'mantriConf.json'],
        tasks: ['mantriDeps:todoApp']
      }
    }

  });

  grunt.registerTask('default', ['test']);

};

