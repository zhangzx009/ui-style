
// automatically import all files ending in *.stories.js
const req = require.context('../package/cm-css/story', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
