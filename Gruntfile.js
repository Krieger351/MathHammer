module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-less");
  //grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
     dev: {
       src:"app/less/style.less",
       dest:"app/css/style.css"
     },
   },
    copy:{
      fonts: {
        expand: true,
        cwd: 'bower_components/font-awesome/fonts/',
        src: '**',
        dest: 'app/fonts',
        flatten:true
      }
    }
  });

  grunt.registerTask('default', ['copy','less']);

};
