const fs = require('fs-extra');
const path = require('path');
const shell = require('shelljs');
const glob = require('fast-glob');

const svgDir = path.join(__dirname, '../assets/svg');
const sketch = path.join(__dirname, '../assets/icons-cmft.sketch');
const SKETCH_TOOL_DIR = '/Applications/Sketch.app/Contents/MacOS/sketchtool';

fs.removeSync(svgDir);

// extract svg from sketch
// should install sketchtool first
// install guide: https://developer.sketchapp.com/guides/sketchtool/
shell.exec(
  `${SKETCH_TOOL_DIR} export slices --formats=svg --overwriting=YES --save-for-web=YES --output=${svgDir} ${sketch}`
);
const formats = ['empty'];


const emptyFont = glob.sync(formats.map(ext => path.join(svgDir, 'empty*.svg')));
emptyFont.forEach(font => fs.removeSync(font));
/*svgo bug*/
//shell.exec('svgo ./assets/svg/*.svg');


