module.exports = function(grunt) {

  grunt.initConfig({
    less: {
        development: {
          files: {
            "assets/css/style.css": "assets/less/source.less"
          }
        }
    },
    cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'assets/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/css',
            ext: '.min.css'
          }]
        }
    },
    watch: {
        tasks: ["less", "cssmin"],
        options: {
          livereload: true,
        },
        files: "assets/less/*"
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']);

};
