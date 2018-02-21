const gulp = require('gulp');
const runSequence = require('run-sequence');
const paths = require('../paths');
const changelog = require('conventional-changelog');
const fs = require('fs');
const bump = require('gulp-bump');
const args = require('../args');

// utilizes the bump plugin to bump the
// semver for the repo
gulp.task('bump-version', () => {
    return gulp.src(['./package.json'])
        .pipe(bump({ type: args.bump })) //major|minor|patch|prerelease
        .pipe(gulp.dest('./'));
});

// generates the CHANGELOG.md file based on commit
// from git commit messages
gulp.task('changelog', (callback) => {
    let pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

    return changelog({
        repository: pkg.repository.url,
        version: pkg.version,
        file: paths.doc + '/CHANGELOG.md'
    }, function (err, log) {
        fs.writeFileSync(paths.doc + '/CHANGELOG.md', log);
    });
});

// calls the listed sequence of tasks in order
gulp.task('prepare-release', (callback) => {
    return runSequence(
        'build',
        // 'lint',
        'bump-version',
        'changelog',
        callback
    );
});
