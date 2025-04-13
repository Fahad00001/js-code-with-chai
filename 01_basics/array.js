const marvelheroes=['thor','ironman','spiderman']
const dc=['superman','flash','batman']
// marvelheroes.push(dc)
// console.log(marvelheroes);
const allheroes=marvelheroes.concat(dc)
console.log(allheroes);
const allnewheors=[...marvelheroes,...dc]
console.log(allnewheors);

const myarr=[1,2,3,[1,2],[1,5,4,6]]
const anotherarray=myarr.flat(Infinity)
console.log(anotherarray);

console.log(Array.from('afahad'));
console.log(Array.from({name:'fahad'}));//intersting





