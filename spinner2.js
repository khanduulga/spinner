let delay = 0;
const spinners = ['|', '/', '-', '\\','|', '/', '-', '\\','|'];

for (const spin of spinners) {
  setTimeout(() => {
    process.stdout.write('\r' + spin);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay);