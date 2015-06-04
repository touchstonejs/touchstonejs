var babel = require('gulp-babel');
var bump = require('gulp-bump');
var connect = require('gulp-connect');
var del = require('del');
var deploy = require('gulp-gh-pages');
var git = require('gulp-git');
var gulp = require('gulp');
var less = require('gulp-less');

// Build/Clean/Watch lib
gulp.task('build:lib', function () {
	return gulp.src('src/**/*.js')
		.pipe(babel({ plugins: [require('babel-plugin-object-assign')] }))
		.pipe(gulp.dest('lib'));
});

gulp.task('clean:lib', function (done) { del(['lib'], done); });
gulp.task('watch:lib', ['build:lib'], function () {
	gulp.watch('src/**/*.js', ['build:lib']);
});

// Build/Clean/Watch site
gulp.task('build:site', ['build:site:css']);
gulp.task('clean:site', function (done) { del(['site/public/build'], done); });
gulp.task('watch:site', ['build:site:css'], function () {
	gulp.watch(['site/src/less/**/*'], ['build:site:css']);
});

// Build CSS
gulp.task('build:site:css', function () {
	return gulp.src('site/src/less/site.less')
		.pipe(less())
		.pipe(gulp.dest('site/public/build/css'))
		.pipe(connect.reload());
})

// Local HTTP server
gulp.task('site', ['watch:site'], function () {
	connect.server({
		root: 'site/public',
		port: 8000,
		livereload: true
	});
});

// Publish
gulp.task('publish:npm', function (done) {
	require('child_process')
		.spawn('npm', ['publish'], { stdio: 'inherit' })
		.on('close', done);
});

// Git tag
gulp.task('publish:tag', function (done) {
	var pkg = require('./package.json');
	var v = 'v' + pkg.version;
	var message = 'Release ' + v;

	git.tag(v, message, function (err) {
		if (err) throw err;

		git.push('origin', v, done)
	});
});

// Version
function _bump (type) {
	return gulp.src(['./package.json', './bower.json'])
		.pipe(bump({ type: type }))
		.pipe(gulp.dest('./'));
}

gulp.task('bump', _bump.bind(null, 'patch'));
gulp.task('bump:minor', _bump.bind(null, 'minor'));
gulp.task('bump:major', _bump.bind(null, 'major'));

// Deploy
gulp.task('publish:site', ['build:site'], function () {
	return gulp.src('site/public/**/*').pipe(deploy());
});

gulp.task('release', ['publish:tag', 'publish:npm', 'publish:site']);
