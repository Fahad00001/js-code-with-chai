const mysym=Symbol("key1")
const jsuser={
    name:"fahad",
    age:18,
    [mysym]:"mykey1",
    location:'delhi',
    email:'khadl@gmail.ciom'

}

console.log(jsuser.age);
console.log(jsuser['age']);
console.log( typeof jsuser[mysym]);


jsuser.email="fahad@gmail.com"
console.log(jsuser);
// Onode 01_basics/object.js
// object.freeze(jsuser)
jsuser.email='helo@gmail.com'
jsuser.greeting=function(){
    console.log('hello jsuser');
    
}
console.log(jsuser.greeting());
jsuser.greetingtwo=function(){
    console.log(`hello jsuser,${this.email}`);  
}
console.log(jsuser.greetingtwo());


const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={5:'e',6:"f"};


// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);


const tinderuser={
    id:'1',
    name:'fahad',
    isloggedin:false
}
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isggedin'));


