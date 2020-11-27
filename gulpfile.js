const {src, dest, series, watch} = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');


function copySource(cb) {
    return src('src/*.js')
        .pipe(babel())
        .pipe(dest('dist/src'))
}


function copyHTMLIncludes() {
    return src('includes/*.html')
        .pipe(dest('dist/includes'))
}

function copyIndexHTML() {
    return src('index.html')
        .pipe(dest('dist/'))
}

function copyFonts() {
    return src('assets/fonts/**/*.*')
        .pipe(dest('dist/assets/fonts'))

}


function copyImages() {
    return src('assets/images/*.*')
        .pipe(dest('dist/assets/images'))

}


function processCSS() {
    let processors = [tailwindcss, autoprefixer];
    return src('./css/*.css')
        .pipe(postcss(processors))
        .pipe(dest('./dist/css'));
}

const watcher = watch(['src/*.js', 'css/*.css', 'includes/*.html', 'index.html', 'assets/*']);

watcher.on('change', function (path, stats) {
    console.log("Redeploying...");
    deploy();
    console.log("Deployed");
});

watcher.on('add', function (path, stats) {
    console.log("Redeploying...");
    deploy();
    console.log("Deployed");
});

function deploy() {
    copySource()
    copyHTMLIncludes()
    copyIndexHTML()
    copyFonts()
    copyImages()
    processCSS()
}

exports.build = series(deploy);

