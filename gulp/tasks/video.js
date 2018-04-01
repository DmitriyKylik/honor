var gulp   = require('gulp');
var config = require('../config');

gulp.task('video', function() {
    return gulp
        .src(config.src.video + '/*.{ogg,mp4}')
        .pipe(gulp.dest(config.dest.video));
});

gulp.task('video:watch', function(){
		gulp.watch(config.src.video + '/*.{ogg,mp4}', ['video']);
});