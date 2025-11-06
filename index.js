 
  const path = require('path');

const filePath = '/home/user/docs/file.txt';

 
console.log('basename:', path.basename(filePath));  
console.log('basename (without extension):', path.basename(filePath, '.txt'));  

 
console.log('dirname:', path.dirname(filePath));  

 
console.log('extname:', path.extname(filePath));  

 
const joinedPath = path.join('/home', 'user', 'docs', 'file.txt');
console.log('join:', joinedPath);  

 
const resolvedPath = path.resolve('docs', 'file.txt');
console.log('resolve:', resolvedPath); 

 


console.log('isAbsolute(/home/user):', path.isAbsolute('/home/user'));  
console.log('isAbsolute(docs/file.txt):', path.isAbsolute('docs/file.txt'));  

 
const from = '/home/user/docs';
const to = '/home/user/music/song.mp3';
console.log('relative:', path.relative(from, to));  

 
const parsed = path.parse(filePath);
console.log('parse:', parsed);
 




const formatted = path.format({
  dir: '/home/user/docs',
  base: 'file.txt'
});
console.log('format:', formatted);  

 



const messyPath = '/home/user//docs/../docs/file.txt';
console.log('normalize:', path.normalize(messyPath));  

 


console.log('path separator:', path.sep); 
console.log('path delimiter:', path.delimiter);  


console.log('Current file path (__filename):', __filename);
console.log('Current directory (__dirname):', __dirname);
