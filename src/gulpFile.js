var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jade = require('gulp-jade');

var srcPath = {
    jadePagesSrc: ["jade/**/*.jade"],
    imgSrc: ["**/*.png", "**/*.jpg", "**/*.svg"],
    cssSrc: ["**/*.css","!owlCarousel/**/*.css"],
    jsSrc: [  "**/*.js", "!gulpFile.js", "!node_modules/**/*.js", "!owlCarousel/**/*.js", "time-tab/time-tab.js"]
}

var distSrc = {
    dist: "../dist/",
    distImg: "../dist/img/",
}

gulp.task('build', function() {
    gulp.src(srcPath.jadePagesSrc)
    .pipe(jade({
      pretty: "\t"
    }))
    .pipe(gulp.dest(distSrc.dist));


    gulp.src(srcPath.cssSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("styles.css")).pipe(gulp.dest(distSrc.dist));

    gulp.src(srcPath.jsSrc).pipe(rename({
        dirname: ''
    })).pipe(concat("script.js")).pipe(gulp.dest(distSrc.dist));

    gulp.src("owlCarousel/**/*.*", { base: './' }).pipe(gulp.dest("../dist/"));
    gulp.src("fonts/**/*.*",  { base: './' }).pipe(gulp.dest("../dist/"));
    gulp.src(srcPath.imgSrc).pipe(rename({
        dirname: ''
    })).pipe(gulp.dest(distSrc.distImg));

});

gulp.task('watch', function() {
  gulp.watch(Object.values(srcPath), ["build"]);
});
