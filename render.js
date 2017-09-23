var path = require('path');
var views = require('co-views');
// views返回一个render方法
module.exports = views(path.resolve(__dirname, '/dist'),{
    map: {html: 'swig'}
});