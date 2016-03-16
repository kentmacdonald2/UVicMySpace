module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'auto'
        },
        files: {
          'assets/css/MyPage.css': 'assets/sass/MyPage.scss'
        }
      }
    },
    'compile-handlebars': {
      amy: {
        files: [{
          expand: true,
          cwd: 'templates/',
          src: ['**/*.hbs', '!partials/**'],
          dest: 'out/amy/',
          ext: '.html'
        }],
        templateData: 'data/amy.json',
        partials: 'templates/partials/**/*.hbs'
      }
    },
    copy: {
      assets: {
        files: [{
          expand: true,
          cwd: 'assets/',
          src: [
            '**/*.css',
            '**/*.eot',
            '**/*.svg',
            '**/*.ttf',
            '**/*.woff',
            '**/*.woff2'
          ],
          dest: 'out/assets/'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      styles: {
        files: 'assets/sass/**/*.scss',
        tasks: ['build-styles']
      },
      templates: {
        files: 'templates/**/*.hbs',
        tasks: ['build-templates']
      },
      data: {
        files: 'data/**/*.json',
        tasks: ['build-templates']
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks.
  grunt.registerTask('build-styles', ['sass', 'cssmin', 'copy:assets']);
  grunt.registerTask('build-templates', ['compile-handlebars']);
  grunt.registerTask('build', ['build-templates', 'build-styles']);
  grunt.registerTask('default', ['build', 'watch']);

};