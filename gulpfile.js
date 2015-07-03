var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var gutil = require('gutil');
var bump = require('gulp-bump');
var connect = require('gulp-connect');
var del = require('del');
var deploy = require('gulp-gh-pages');
var git = require('gulp-git');
var gulp = require('gulp');
var less = require('gulp-less');
var source = require('vinyl-source-stream');

const SITE_BUILD_PATH = 'site/__build';
const SITE_FILES = [
	'.gitignore',
	'404.html',
	'CNAME',
	'favicon.ico',
	'images/*',
	'index.html',
	'logo.svg',
	'logo-mark.svg'
];

// Build/Clean/Watch lib
gulp.task('build:lib', function () {
	return gulp.src('src/**/*')
		.pipe(babel({ plugins: [require('babel-plugin-object-assign')] }))
		.pipe(gulp.dest('lib'));
});

gulp.task('clean:lib', function (done) { del(['lib'], done); });
gulp.task('watch:lib', ['build:lib'], function () {
	gulp.watch('src/**/*', ['build:lib']);
});

// Site
gulp.task('clean:site', function (done) { del(['site/__dist'], done); });

gulp.task('build:site:files', function () {
	return gulp.src([
			SITE_FILES
		], {
			cwd: 'site',
			base: 'site'
		})
		.pipe(gulp.dest(SITE_BUILD_PATH));
});

gulp.task('build:site:js', function () {
	browserify('site/site.js')
		.transform(babelify.configure({
			plugins: [require('babel-plugin-object-assign')]
		}))
		.bundle()
		.on('error', function (e) {
			gutil.log('Browserify Error', e);
		})
		.pipe(source('site.js'))
		.pipe(gulp.dest(SITE_BUILD_PATH));
});

gulp.task('build:site:less', function () {
	return gulp.src('site/site.less')
		.pipe(less())
		.pipe(gulp.dest(SITE_BUILD_PATH));
});

gulp.task('build:site', ['build:site:files', 'build:site:less', 'build:site:js']);

// Local HTTP server
gulp.task('site', ['build:site'], function () {
	connect.server({
		root: SITE_BUILD_PATH,
		port: 8000
	});
});

// Publish
gulp.task('publish:npm', function (done) {
	require('child_process')
		.spawn('npm', ['publish'], { stdio: 'inherit' })
		.on('close', done);
});

gulp.task('publish:tag', function (done) {
	var pkg = require('./package.json');
	var v = 'v' + pkg.version;
	var message = 'Release ' + v;

	git.tag(v, message, function (err) {
		if (err) throw err;

		git.push('origin', v, done);
	});
});

gulp.task('publish:site', ['build:site'], function () {
	return gulp.src(SITE_BUILD_PATH + '/**/*').pipe(deploy());
});

gulp.task('release', ['publish:tag', 'publish:npm', 'publish:site']);

// Version
function _bump (type) {
	return gulp.src(['./package.json', './bower.json'])
		.pipe(bump({ type: type }))
		.pipe(gulp.dest('./'));
}

gulp.task('bump', _bump.bind(null, 'patch'));
gulp.task('bump:minor', _bump.bind(null, 'minor'));
gulp.task('bump:major', _bump.bind(null, 'major'));
