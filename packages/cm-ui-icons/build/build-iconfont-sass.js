/**
 * build iconfont from sketch
 */


const {src, dest, series} = require('gulp');
const fs = require('fs-extra');
const path = require('path');
const glob = require('fast-glob');
const shell = require('shelljs');
const encode = require('./build-encode');
const md5File = require('md5-file');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const config = require('../src/config');


// path
const srcDir = path.join(__dirname, '../src');
const svgDir = path.join(__dirname, '../assets/svg');
const sketch = path.join(__dirname, '../assets/icons.sketch');
const template = path.join(__dirname, './sassTemplate.tpl');
const formats = ['ttf', 'woff', 'woff2'];

// get md5 from sketch
const md5 = md5File.sync(sketch).slice(0, 6);
const fileName = `${config.name}-${md5}`;
const fontUrlPath = '';
const fontName = `${config.name}`;

const config = {
    fontName:'',
    templatePath:'',
    targetPath:'',
    casheBuster:'',
}


const scssTemplate = path.join(__dirname,'./template/_templateSass.tpl')


// remove previous fonts

const prevFonts = glob.sync(formats.map(ext => path.join(srcDir, '*.' + ext)));
prevFonts.forEach(font => fs.removeSync(font));



function fontSass() {
    return src([`${svgDir}/*.svg`])
        .pipe(
            iconfontCss({
                fontName: config.name,
                path: scssTemplate,
                targetPath: '../src/icon-style.scss',
                normalize: true,
                firstGlyph: 0xf000,
                cssClass: fontFileName // this is a trick to pass fontName to template
            })
        )
        .pipe(
            iconfont({
                fontName,
                formats
            })
        )
        .pipe(dest(srcDir));
}


// generate font from svg && build index.less
function font() {
    return src([`${svgDir}/*.svg`])
        .pipe(
            iconfontCss({
                fontName: config.name,
                path: template,
                targetPath: '../src/index.scss',
                normalize: true,
                firstGlyph: 0xf000,
                cssClass: fontName // this is a trick to pass fontName to template
            })
        )
        .pipe(
            iconfont({
                fontName,
                formats
            })
        )
        .pipe(dest(srcDir));
}

function upload(done) {
    // generate encode.less
    encode(fontName, srcDir);

    // // upload font to cdn
    // formats.forEach(ext => {
    //   shell.exec(`superman-cdn /vant ${path.join(srcDir, fontName + '.' + ext)}`);
    // });

    done();
}

exports.default = series(font, upload);
