process.stdout.write('hellow from spinner.... \rheyyyyy\n');

const spinnerParts = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;

for(let i = 0; i < spinnerParts.length; i++ ) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerParts[i]}   `);
  }, timer);
  timer += 200;
}

setTimeout(() => {
  console.log('');
}, timer);

