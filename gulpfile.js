var babel = require('gulp-babel');
var bump = require('gulp-bump');
var connect = require('gulp-connect');
var del = require('del');
var deploy = require("gulp-gh-pages");
var git = require("gulp-git");
var gulp = require('gulp');
var less = require('gulp-less');

var src = [
	'src/**/*.js',
	'!**/__tests__/**/*'
];
/**
 * Clean the build
 */

gulp.task('clean:lib', function(done) {
	del(['lib'], done);
});


/**
 * Build lib
 */

gulp.task('build:lib', function() {
	return gulp.src(src)
		.pipe(babel({
			plugins: [require('babel-plugin-object-assign')]
		}))
		.pipe(gulp.dest('lib'));
});

gulp.task('watch:lib', ['build:lib'], function() {
	gulp.watch(src, ['build:lib']);
});


/**
 * Clean site build
 */

gulp.task('clean:site', function(done) {
	del(['site/public/build'], done);
});



/**
 * Build site css from less
 */

function buildSiteCSS() {
	return gulp.src('site/src/less/site.less')
		.pipe(less())
		.pipe(gulp.dest('site/public/build/css'))
		.pipe(connect.reload());
}

gulp.task('build:site:css', buildSiteCSS);


/**
 * Build site
 */

gulp.task('build:site', [
	'build:site:css'
]);

gulp.task('watch:site', [
	'build:site:css'
], function() {
	gulp.watch(['site/src/less/**/*'], ['build:site:css']);
});


/**
 * Serve task for local development
 */

gulp.task('site', ['watch:site'], function() {
	connect.server({
		root: 'site/public',
		port: 8000,
		livereload: true
	});
});




/**
 * Version bump tasks
 */

function _bump(type) {
	return function() {
		return gulp.src(['./package.json', './bower.json'])
			.pipe(bump({ type: type }))
			.pipe(gulp.dest('./'));
	};
}

gulp.task('bump', _bump('patch'));
gulp.task('bump:minor', _bump('minor'));
gulp.task('bump:major', _bump('major'));


/**
 * Git tag task
 * (version *must* be bumped first)
 */

gulp.task('publish:tag', function(done) {
	var pkg = require('./package.json');
	var v = 'v' + pkg.version;
	var message = 'Release ' + v;

	git.tag(v, message, function (err) {
		if (err) throw err;
		git.push('origin', v, function (err) {
			if (err) throw err;
			done();
		});
	});
});


/**
 * npm publish task
 * * (version *must* be bumped first)
 */

gulp.task('publish:npm', function(done) {
	require('child_process')
		.spawn('npm', ['publish'], { stdio: 'inherit' })
		.on('close', done);
});


/**
 * Deploy tasks
 */

gulp.task('publish:site', ['build:site'], function() {
	return gulp.src('site/public/**/*').pipe(deploy());
});

gulp.task('release', ['publish:tag', 'publish:npm', 'publish:site']);
