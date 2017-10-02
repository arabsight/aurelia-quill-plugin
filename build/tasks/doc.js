const gulp = require('gulp');
const tools = require('aurelia-tools');
const paths = require('../paths');
const yuidoc = require('gulp-yuidoc');

gulp.task('doc-generate', function () {
    return gulp.src(paths.source)
        .pipe(yuidoc.parser(null, 'api.json'))
        .pipe(gulp.dest(paths.doc));
});

gulp.task('doc', ['doc-generate'], function () {
    tools.transformAPIModel(paths.doc);
});
