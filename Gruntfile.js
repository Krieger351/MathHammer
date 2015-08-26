
module.exports = function (grunt) {


  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
       build:{
         options: {
           plugins: [
             new (require('less-plugin-clean-css'))({ advanced: true })
           ]
         },
         src: "less/style.less",
         dest: "public_html/css/style.css"
       }
     }
  });

   grunt.registerTask("default",['less']);

};
