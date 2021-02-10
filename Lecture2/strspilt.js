const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');//numspace
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');//numstring
console.log(chars[8]);
// expected output: "k"