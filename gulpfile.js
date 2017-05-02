/////////////////////////////////////////
// Required
/////////////////////////////////////////
var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	compass = require('gulp-compass'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber');
/////////////////////////////////////
// Script Task
/////////////////////////////////////
gulp.task('scripts', function(){
	gulp.src(['app/assets/js/**/*.js', '!app/assets/js/**/*.min.js'])
	.pipe(plumber())
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/assets/js'));
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
		// require: ['susy']
	}))
	// .pipe(autoprefixer('last 2 versions'))
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
	// gulp.src('app/**/*.html')
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));
})

/////////////////////////////////////
// Watch Task
/////////////////////////////////////
gulp.task('watch', function(){
	gulp.watch('app/assets/js/**/*.js', ['scripts']);
	gulp.watch('app/assets/sass/**/*.scss', ['compass']);
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
gulp.task('default',['scripts','browser-sync','watch','compass','html','js']);