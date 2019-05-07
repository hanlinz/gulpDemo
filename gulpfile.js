require('babel-polyfill');
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins'),
	plugins = gulpLoadPlugins();
const path = require('path')
const open = require('open')

function resolvePath(str){
	return path.resolve(__dirname, str)
}

gulp.task('minify',function(done){
	gulp.src(resolvePath('./src/build/**/*.js'))
	.pipe(plugins.uglify())
	.pipe(gulp.dest(resolvePath('./src/build/min')))
	// done();
})

gulp.task('toes5', function(done){
	return gulp.src(resolvePath('./src/develop/js/**/*.js'))
	.pipe(plugins.babel())
	.pipe(gulp.dest(resolvePath('./src/build/js')))
	.pipe(plugins.connect.reload())
	// done();
})

gulp.task('sass', function(done){
	return gulp.src(resolvePath('./src/develop/sass/**/*.scss'))
	.pipe(plugins.sass())
	.pipe(gulp.dest(resolvePath('./src/build/css')))
	.pipe(plugins.connect.reload())
})

gulp.task('html', function(){
	return gulp.src(__dirname).pipe(plugins.connect.reload())
})

gulp.task('server', function(done){
	plugins.connect.server({
		root: __dirname,
		livereload: true,
		port: 8086,
		host: '192.168.2.73',
		fallback: 'index.html',
	}).startedCallback = function(){
		open('http://192.168.2.73:8086', 'chrome')
	}
})

gulp.task('auto', function(done){
	gulp.watch(resolvePath('./src/develop/js/**/*.js'), ['toes5']);
    gulp.watch(resolvePath('./src/build/**/*.js'), ['minify']);
    gulp.watch(resolvePath('./src/develop/sass/**/*.scss'), ['sass']);
    gulp.watch(resolvePath('./**/*.html'), ['html'])
    // done()
})

gulp.task('default', ['server', 'auto'])
