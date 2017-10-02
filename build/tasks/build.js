const gulp = require('gulp');
const runSequence = require('run-sequence');
const to5 = require('gulp-babel');
const paths = require('../paths');
const compilerOptions = require('../babel-options');

gulp.task('build-html', () => {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.output + 'es2015'))
        .pipe(gulp.dest(paths.output + 'commonjs'))
        .pipe(gulp.dest(paths.output + 'amd'))
        .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-css', () => {
    return gulp.src(paths.css)
        .pipe(gulp.dest(paths.output + 'es2015'))
        .pipe(gulp.dest(paths.output + 'commonjs'))
        .pipe(gulp.dest(paths.output + 'amd'))
        .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-es2015', () => {
    return gulp.src(paths.source)
        .pipe(to5(Object.assign({}, compilerOptions.es2015())))
        .pipe(gulp.dest(paths.output + 'es2015'));
});

gulp.task('build-commonjs', () => {
    return gulp.src(paths.source)
        .pipe(to5(Object.assign({}, compilerOptions.commonjs())))
        .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', () => {
    return gulp.src(paths.source)
        .pipe(to5(Object.assign({}, compilerOptions.amd())))
        .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', () => {
    return gulp.src(paths.source)
        .pipe(to5(Object.assign({}, compilerOptions.system())))
        .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', (callback) => {
    return runSequence(
        'clean',
        ['build-html', 'build-css', 'build-es2015', 'build-commonjs', 'build-amd', 'build-system'],
        callback
    );
});
