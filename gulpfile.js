let gulp         = require('gulp');
let sass         = require('gulp-sass');
let browserSync  = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let pug          = require('gulp-pug');
let coffeescript = require('gulp-coffeescript');
let uglify       = require('gulp-uglify');
let plumber      = require('gulp-plumber');
let reload       = browserSync.reload;
let cleanCSS     = require('gulp-clean-css');

let paths = {
              css:['sass/main.sass'],
              sass:['sass/*'],
              html:['pug/index.pug'],
              pug:['pug/*'],
              script:['coffee/js.coffee'],
              output:['output'],
              js:['js']
};

gulp.task('css', function(){
  return gulp.src(paths.css)
    .pipe(plumber())
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
    .pipe(autoprefixer(['last 4 versions', 'ie 8', 'ie 7'], { cascade: false }))
    .pipe(gulp.dest('normal'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('output'))
    .pipe(reload({stream:true}));
});

gulp.task('scripts', function(){
  return gulp.src(paths.script)
    .pipe(plumber())
    .pipe(coffeescript({bare: true}))
    .pipe(gulp.dest('normal'))
    .pipe(uglify())
    .pipe(gulp.dest('output'))
    .pipe(reload({stream:true}));
});

gulp.task('html', function(){
  return gulp.src(paths.html)
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('output'))
    .pipe(reload({stream:true}));
});

gulp.task('watcher',function(){
  gulp.watch(paths.sass, ['css']);
  gulp.watch(paths.pug, ['html']);
  gulp.watch(paths.script, ['scripts']);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./output"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('default', 
     ['watcher',
      'browserSync'
     ]);