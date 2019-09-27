require('babel-polyfill');
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();
const path = require('path')
const open = require('open')
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

function resolvePath(str) {
    return path.resolve(__dirname, str)
}


gulp.task('minify', function (done) {
    gulp.src(resolvePath('./src/build/**/*.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(resolvePath('./src/build/min')))
    // done();
})

gulp.task('toes5', function (done) {
    return gulp.src(resolvePath('./src/develop/js/**/*.js'))
        .pipe(plugins.babel())
        .pipe(gulp.dest(resolvePath('./src/build/js')))
        .pipe(plugins.connect.reload())
    // done();
})

gulp.task('sass', function (done) {
    return gulp.src(resolvePath('./src/develop/sass/**/*.scss'))
        .pipe(plugins.sass())
        .pipe(gulp.dest(resolvePath('./src/build/css')))
        .pipe(plugins.connect.reload())
})

gulp.task('html', function () {
    return gulp.src(__dirname).pipe(plugins.connect.reload())
})

gulp.task('server', function (done) {
    plugins.connect.server({
        root: __dirname,
        livereload: true,
        port: 8086,
        host: '192.168.2.65',
        fallback: 'index.html',
    }).startedCallback = function () {
        open('http://192.168.2.65:8086', 'chrome')
    }
})

gulp.task('auto', function (done) {
    w(resolvePath('./src/develop/js/**/*.js'), 'toes5');
    w(resolvePath('./src/build/**/*.js'), 'minify');
    w(resolvePath('./src/develop/sass/**/*.scss'), 'sass');
    w(resolvePath('./**/*.html'), 'html');
    w(resolvePath('./src/develop/img/**/*.*'), 'imagemin');
    function w(path, task) {
        watch(path, function(){
            gulp.start(task);
        })
    }
    // done()
})

gulp.task('imagemin', function () {
    return gulp.src(resolvePath('./src/develop/img/**/*.*'))
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        })).pipe(gulp.dest(resolvePath('./src/build/img')))
        .pipe(plugins.connect.reload())
})

gulp.task('default', ['server', 'auto'])
