var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var appDev = 'app/';
var appProd = 'public/js/app/';
var vendor = 'public/js/vendor';
var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', function () {

    return gulp.src([appDev + '**/*.html', appDev + '**/*.htm', appDev + '**/*.css'])
        .pipe(gulp.dest(appProd));
});
gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.{html,htm,css}', ['build-copy']);
});
gulp.task('vendor', function() {

    // Angular 2 Framework
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(vendor + '/@angular'));

    //ES6 Shim
    gulp.src('node_modules/es6-shim/**')
        .pipe(gulp.dest(vendor + '/es6-shim/'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs/'));


    gulp.src('node_modules/core-js/**')
        .pipe(gulp.dest(vendor + '/core-js/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs/'));

    //socket.io
    gulp.src('node_modules/socket.io/**')
        .pipe(gulp.dest(vendor + '/socket.io/'));

    //socket.io
    gulp.src('node_modules/socket.io-adapter/**')
        .pipe(gulp.dest(vendor + '/socket.io-adapter/'));
    gulp.src('node_modules/socket.io-client/**')
        .pipe(gulp.dest(vendor + '/socket.io-client/'));
    gulp.src('node_modules/socket.io-client/**')
        .pipe(gulp.dest(vendor + '/socket.io-parser/'));
    gulp.src('node_modules/jade/**')
        .pipe(gulp.dest(vendor + '/jade/'));

    gulp.src('node_modules/ng-simple-webrtc/**')
        .pipe(gulp.dest(vendor + '/ng-simple-webrtc/'));
    gulp.src('node_modules/simplewebrtc/**')
        .pipe(gulp.dest(vendor + '/simplewebrtc/'));
    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js/'));

});



gulp.task('default', ['watch', 'build-ts', 'build-copy']);