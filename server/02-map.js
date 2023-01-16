const letters = ['a','b','c'];

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }

// Nueva forma y compacta
const newArray = letters.map(item => item + '++');

console.log('original', letters);
console.log('new', newArray);