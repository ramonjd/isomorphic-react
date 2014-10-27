module.exports = (grunt)->
  grunt.initConfig(
    pkg: grunt.file.readJSON('package.json')
    # task definitions
    coffee:
      compile:
        options:
          bare:true
        files:
          'server.js' : 'server.coffee'
      jsx:
        options:
          bare:true
        expand: true
        flatten: false
        cwd: 'react'
        src: '**/*.coffee'
        dest: 'react'
        ext: '.jsx'
    watch:
      react:
        files: 'react/**/*.coffee'
        tasks: ['compile']
    browserify:
      options:
        transform: [require('grunt-react').browserify]
      client:
        src: ['react/**/*.jsx']
        dest: 'public/js/bundle.js'
    concurrent:
      main:
        tasks: ['nodemon', 'watch']
        options:
          logConcurrentOutput: true
    nodemon:
      main:
        script: 'server.js'
        env:
          PORT: '8000'
    )
  # load modules
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-nodemon'
  
  # register tasks
  grunt.registerTask 'compile', ['coffee', 'coffee:jsx', 'browserify']
  grunt.registerTask 'default', ['compile', 'concurrent']
  
  # return grunt
  grunt