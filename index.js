// import fs from 'node:fs';

// const content = fs.readFileSync('test.json');
// fs.writeFileSync('output.txt', content);
// const entry = JSON.parse(content.toString());
// console.log(entry.message);

// import fs from 'node:fs';

// fs.readFile('test.json', (err, content) => {
//   fs.writeFile('output.txt', content, (err) => {
//     console.log('write');
//   });
//   console.log('read');
// });

// console.log('finish');

// import fs from 'node:fs/promises';

// const content = await fs.readFile('test.json');
// await fs.writeFile('output.txt', content);

// const entry = JSON.parse(content.toString());
// console.log(entry.message);

// import fs from 'node:fs/promises';
// import path from 'node:path';

// console.log(path.join('dir', 'test', 'some', '..', 'test.json.dsh'));
