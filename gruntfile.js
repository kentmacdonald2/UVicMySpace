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
        },
      }
    },
    'compile-handlebars': {
      dist: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['*.hbs'],
          dest: '.',
          ext: '.html'
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
      css: {
        files: 'assets/sass/**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks.
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
  grunt.registerTask('build', ['sass', 'cssmin']);

};