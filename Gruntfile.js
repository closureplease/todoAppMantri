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
    }

  });

  // Create shortcuts to main operations.
  grunt.registerTask('deps', ['mantriDeps:todoApp']);
  grunt.registerTask('build', ['mantriBuild:todoApp']);

  // the default task, when 'grunt' is executed with no options.
  grunt.registerTask('default', ['test']);

};

