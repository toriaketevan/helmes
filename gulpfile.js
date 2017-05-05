/////////////////////////////////////////
// Required
/////////////////////////////////////////
var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	compass = require('gulp-compass'),
	rename = require('gulp-rename'),
	mainBowerFiles = require('main-bower-files'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify-css'),
	browserSync = require('browser-sync'),
	minify = require('gulp-minify-css')
	reload = browserSync.reload,
	plumber = require('gulp-plumber');

/////////////////////////////////////
// Concatenate all css
/////////////////////////////////////
gulp.task('concatcss', function(){  
  return gulp.src(['app/bower_components/bootstrap/dist/css/bootstrap.min.css','app/assets/css/style.css'])
  .pipe(minify())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('app/assets/css'))
  .pipe(reload({stream:true}));
});

/////////////////////////////////////
// Concatenate all js
/////////////////////////////////////
gulp.task('concatjs', function(){  
  return gulp.src(['app/bower_components/jquery/dist/jquery.js', 'app/bower_components/angular/angular.js', 'app/bower_components/angular-route/angular-route.js', 'app/bower_components/bootstrap/dist/js/bootstrap.min.js'])
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('app/assets/js'))
  .pipe(reload({stream:true}));
});

/////////////////////////////////////
// Compass / Sass Task
/////////////////////////////////////
gulp.task('compass', function(){
	gulp.src('app/assets/sass/style.scss')
	.pipe(plumber())
	.pipe(compass({
		config_file: './config.rb',
		css:'app/assets/css',
		sass: 'app/assets/sass',
	}))
	.pipe(gulp.dest('app/assets/css/'))
	.pipe(reload({stream:true}));
});

/////////////////////////////////////
// browserSync Task
/////////////////////////////////////
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: "./app/"	
		}	
	});
})

/////////////////////////////////////
// HTML Task
/////////////////////////////////////
gulp.task('html', function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));
})

/////////////////////////////////////
// Watch Task
/////////////////////////////////////
gulp.task('watch', function(){
	gulp.watch('app/assets/js/**/*.js', ['concatjs']);
	gulp.watch('app/assets/sass/**/*.scss', ['compass']);
	gulp.watch('app/assets/css/style.css', ['concatcss']);
	gulp.watch('app/**/*.html', ['html']);
});

gulp.task('js',function(){
	return gulp.src('app/assets/js/animation.js')
	.pipe(browserify({debag:true}))
	.pipe(gulp.dest('app/assets/builds/development/js'))
});




/////////////////////////////////////
// Default Task
/////////////////////////////////////
gulp.task('default',['browser-sync','watch','compass','html','js','concatjs','concatcss']);