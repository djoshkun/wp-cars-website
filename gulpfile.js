// Gulp.js configuration
'use strict';

const

  // source and build folders
  dir = {
    src         : 'src/',
    build       : '/var/www/html/wordpress/wp-content/themes/firstwpsite/'
  },

  // Gulp and plugins
  gulp          = require('gulp'),
  gutil         = require('gulp-util'),
  newer         = require('gulp-newer'),
  imagemin      = require('gulp-imagemin'),
  sass          = require('gulp-sass'),
  postcss       = require('gulp-postcss'),
  deporder      = require('gulp-deporder'),
  concat        = require('gulp-concat'),
  stripdebug    = require('gulp-strip-debug'),
  uglify        = require('gulp-uglify'),
   watchSass = require("gulp-watch-sass")
;

// Browser-sync
var browsersync = false;


// PHP settings
const php = {
  src           : dir.src + 'template/**/*.php',
  build         : dir.build
};

// copy PHP files
gulp.task('php', () => {
  return gulp.src(php.src)
    .pipe(newer(php.build))
    .pipe(gulp.dest(php.build));
});

// image settings
const images = {
  src         : dir.src + 'images/**/*',
  build       : dir.build + 'images/'
};

// image processing
gulp.task('images', () => {
  return gulp.src(images.src)
    .pipe(newer(images.build))
    .pipe(imagemin())
    .pipe(gulp.dest(images.build));
});

// CSS settings
var css = {
  src         : dir.src + 'scss/style.scss',
  watch       : dir.src + 'scss/**/*',
  build       : dir.build,
  sassOpts: {
    outputStyle     : 'expanded',
    imagePath       : images.build,
    precision       : 3,
    errLogToConsole : true
  },
  processors: [
    require('postcss-assets')({
      loadPaths: ['images/'],
      basePath: dir.build,
      baseUrl: '/wordpress/wp-content/themes/firstwpsite/'
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions', '> 2%']
    }),
    require('css-mqpacker'),
    require('cssnano')
  ]
};

// CSS processing
gulp.task('css', gulp.series('images', function() { 
  return gulp.src(css.src)
    .pipe(sass(css.sassOpts))
    .pipe(postcss(css.processors))
    .pipe(gulp.dest(css.build))
    .pipe(browsersync ? browsersync.reload({ stream: true }) : gutil.noop());
}));

gulp.task('watch', function() {
    gulp.watch(['./src/scss/*.scss'], ['sass'])
});