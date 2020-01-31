const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');



const files = { 
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js'
}

function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init()) 
        .pipe(sass()) 
        .pipe(postcss([ autoprefixer(), cssnano() ])) 
        .pipe(sourcemaps.write('.')) 
        .pipe(dest('dist')
    ); 
}

function jsTask(){
    return src([
        files.jsPath
        ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist')
    );
}

var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

function watchTask(){
    watch([files.scssPath, files.jsPath], 
        series(
            parallel(scssTask, jsTask),
            cacheBustTask
        )
    );    
}

exports.default = series(
    parallel(scssTask, jsTask), 
    cacheBustTask,
    watchTask,
);