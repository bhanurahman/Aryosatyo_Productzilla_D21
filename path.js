const { lchown } = require('fs');
const path = require('path');
const basename = path.basename(
    'D:\\Tugas Bhanu\\hari 22'
)
console.log('basename', basename);

const dirname = path.dirname(
    'D:\\Tugas Bhanu\\hari 22'
);
console.log('dirname', dirname);

const extname = path.extname(
    'D:\\Tugas Bhanu\\hari 22'
);
console.log('extname', extname);

const isAbsolute = path.isAbsolute(
    'D:\\Tugas Bhanu\\hari 22'
);
console.log('isAbsolute', isAbsolute);

const joinedPath = path.join('bootcamp', ' productzilla', 'batch', '4');
console.log('joinedPath', joinedPath);
console.log('resolvePath', path.resolve(joinedPath));

const relativePath = path.relative(
    'D:\\Users\\Tugas Bhanu\\hari 22\\a\\b',
    'D:\\Users\\Tugas Bhanu\\hari 22\\app.js'
)
console.log('relativePath', relativePath);

const resolvePath = path.resolve('bootcamp/productzilla')
console.log('reslovedpath', resolvePath);