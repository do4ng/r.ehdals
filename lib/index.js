const fs = require('fs');
var config = require('./config').posts;
const path = require('path');
config.forEach((element) => {
  element['content'] = fs
    .readFileSync(path.join(__dirname, `./posts/${element.url}.md`))
    .toString();
});
fs.writeFileSync(
  path.join(__dirname, '../src/Data/post.json'),
  JSON.stringify(config)
);
