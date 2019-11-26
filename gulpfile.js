const   gulp = require('gulp'),
        clean = require('gulp-clean'),
        sass = require('gulp-sass'),
        concat = require('gulp-concat'),
        babel = require('gulp-babel'),
        uglify = require('gulp-uglify'),
        minifyCSS = require('gulp-clean-css'),
        prefixer = require('gulp-autoprefixer'),
        imagemin = require('gulp-imagemin'),
        browserSync = require('browser-sync').create();

const path = {
        src: {
                scss: "src/scss/*.scss",
                js: "src/js/*.js",
                img: "src/img/**/*"
        },
        dist : {
                self: "./dist",
                css: "dist/css/",
                js: "dist/js/",
                img: "dist/img/"
        },
        watch : {
                scss: "src/**/*.scss"
        }

};

const cleanDist = () => (
    gulp.src(path.dist.self, {allowEmpty: true})
        .pipe(clean())
);

const buildIMG = () => (
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
);

const buildSCSS = () => (
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
                cascade: false
        }))
        .pipe(minifyCSS( {compatibility: 'ie8'}))
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest(path.dist.css))
);


const buildJS = () => (
    gulp.src(path.src.js)
        .pipe(concat("script.min.js"))
        .pipe(babel({
                presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
);

const watcher = () => {
        browserSync.init({
                server: {
                        baseDir: "./"
                }
        });

        gulp.watch(path.watch.scss, buildSCSS).on('change', browserSync.reload);
        gulp.watch(path.src.js, buildJS).on('change', browserSync.reload);
        gulp.watch(path.src.img, buildIMG).on('change', browserSync.reload);
};

gulp.task('build', gulp.series(
    cleanDist,
    buildSCSS,
    buildJS,
    buildIMG
));

gulp.task('dev', gulp.series(
    watcher
));