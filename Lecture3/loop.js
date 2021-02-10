const names = ['Justin', 'Sarah', 'Christopher'];

console.log('-- while --');
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}

console.log('-- for --');
for (let index = 0; index < names.length; index++){
    const name = names[index];
    console.log(name);
}

console.log('-- for of --');
for (let name of names) {
    console.log(name);
}
console.log('-- do while --');
index = 0;
do {
    const name = names[index];
    console.log(name);
    index++;
} while (index < names.length);