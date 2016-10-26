var gulp = require('gulp'),
	react = require('react'),
	babel = require('babel'),
	$ = require('gulp-load-plugins')();

gulp.task('jsx',function(){
	return gulp.src('src/')
	.pipe(react())
	.pipe(babel({presets:'es2015'}))
	.pipe(gulp.dest('dest/'))
})

gulp.task('default',function(){
	gulp.start('jsx');
})
