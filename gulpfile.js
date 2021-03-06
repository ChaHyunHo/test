const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');


gulp.task('default', function(done){
    // EsLint 실행
    gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());

    // study EsLint 실행
    gulp.src(['study/**/**/*.js', 'public/study/**/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
    
    // 노드 소스
    gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));

    // 스터디 노드 소스
     gulp.src('study/**/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
   
    
    // 브라우저 소스
    gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));
    done();

     // 스터디 브라우저 소스
     gulp.src('public/study/**/**/*.js')
     .pipe(babel())
     .pipe(gulp.dest('public/dist'));
     done();
});