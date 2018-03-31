var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', 
    ['copy:watch',
    
    'nunjucks:watch',
    'sprite:svg:watch',
    'list-pages:watch',
    'webpack:watch',
    'video:watch',
    'sass:watch'
]);
