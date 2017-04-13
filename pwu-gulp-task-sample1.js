/* global module */
module.exports = function (
    gulp,
    $,
    notify,
    prod,
    done
) {
    'use strict';

    return gulp.src([
            /* ... (part of code not allowed to be published) ... */
        ])
        .pipe($.plumber())
        .pipe($.if(!prod, $.sourcemaps.init()))
        .pipe($.sass())
        .pipe($.flatten())
        .pipe($.if(prod,$.autoprefixer()))
        .pipe($.if( prod, $.cssnano({ zindex: false }) ))
        .pipe($.if(!prod, $.sourcemaps.write('.')))
        .pipe(gulp.dest('./web/assets/css'))
        .on('end', function() { notify().write({
            title: 'Gulp: Sass Compilation',
            message: 'Sass compilation completed!'
        }); }).
    on('end', done);
};
