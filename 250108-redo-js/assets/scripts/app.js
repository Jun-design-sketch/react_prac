// build processを使用しない場合は拡張子を書くのだ。。
// import { apiKey } from "../scripts/util.js";

// Base Syntax & rules
// 適当に名前を割り当ててあげる必要がある。。
import apiKey from "./util.js";
console.log(`hahaha this is ${apiKey}`);

// defaultは1個だけだけれどそれ以外は複数取り出せる。。
// import { some, thing } from "./util.js";
// console.log(`${some} + ${thing}`);

// *しても良い。。
import * as util from "./util.js";
console.log(`${util.some} +......+ ${util.thing}`);

// aliasしても良い。。
import { some as special, thing as stuff } from "./util.js";
console.log(`${special} ----- ${stuff}`);

// Variables, values & operators..
let hello = 'hello';

// const cons = 'cons!';
// cons = 'changed cons!';
// console.log(cons); // Assignment to constant variable

let num = 3.2;
let bol = true;

// let arr = [num,bol,'c'];
// for(let el of arr) { console.log(el) };
// for(let index of arr) { console.log(index) };
// arr.forEach((el, index) => {
//   console.log(`${el} + ${index}`);
// });

// 明日から。。
function laterTomorrow(money) {
  // console.log('明日からは頑張るのだ。。');
  // console.log(`今すぐ${money}億円欲しい！`);
  // returnしても良い。。
  return `明日からは頑張るのだ。。今すぐ${money}億円欲しい！`;
}
// ただし呼ばれないとそういうことは起きない。。
// laterTomorrow(5000);
// console.log(laterTomorrow(5000));

// arrow function syntax..
() => {
  console.log('eheheheheheheh!');
};
singleVar => {
  console.log('代入変数が1個なら()なくてもいけるのだ。。');
};

// return以外何もなければこうできる。。
number => number * 3;
// objectならこうだ。。
// number => {age: number};
// JSは{}をオブジェクト生成役割でなく関数本文のrapperとして扱うのでダメなのだ。。
number => ({age: number});

const january = {
  name : 'jan',
  age : 5000,
  intro(){
    console.log('関数も入るのだ。。');
  }
  };

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  att() {
    console.log('いってきます');
  }
}

const yamada = new Student("Yam!", 99);

// array
const thisIsArr =["this", "is", "Arr"];
console.log(thisIsArr[1]);
thisIsArr.push("ay");
console.log(thisIsArr);
// func in func
const idx = thisIsArr.findIndex((item) => {
  return item === 'ay';
});
console.log(idx);
// nested
const nestedArr = [
  ["aaaa", "bbbb"],
  ["cccc", "dddd"]
];
console.log(nestedArr[0][0]);
// map
const edited = thisIsArr.map((element) => ({name : element + "!"})); // cause map() returns new array
console.log(edited);

// destructuring

// const brandNewArr = ["brand", "new", "array"];
// const first = brandNewArr[0];
// const second = brandNewArr[1];
const [first, second, third] = ["brand", "new", "array"];
console.log(first + " " + second + " " + third);

// destructuring in object
// const someObj = {
//   name: "Some",
//   value: 999
// };
// const name = someObj.name;
// const value = someObj.value;
const {name: NaMe, value} = { // should match with field but also could have alias
  name: "Some",
  value: 999
};
console.log(NaMe + " " + value);

// つまり。。
// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }
// 同じ
// function storeOrder({id, currency}) {
//   localStorage.setItem('id', id);
//   localStorage.setItem('currency', currency);
// }

// spread
const nestedSpread = [...thisIsArr, nestedArr];
console.log(nestedArr);
const spreaded = [...thisIsArr, ...nestedArr]; // get all elements
console.log(spreaded);
const extended = {
  important: true,
  ...thisIsArr
};
console.log(extended);

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Another Timed out");
};


// function to function(as var)
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log('Third Timed out...');
}, 4000);
// setTimeout(handleTimeout()); // set handleTimeout()'s return value

function greeter(greetFn) {
  greetFn();
};
greeter(() => console.log("Hello, function"));

// not for vanila, for react
function init() {
  function greet123() {
    console.log('Hi...');
  }
  greet123();
}
// greet123(); // greet123 is not defined
init();


// reference & primitive
let userMessage = 'message'; // reference
userMessage = 'edited'; // new string, not exchanged
// concatも既存の値を変えるのではなく新しいStringを生成する

// also object = reference
// メモリ住所に依存するため
const hobbies = ["1", "2"]; // 住所が固定されているconst
hobbies.push("3");
console.log(hobbies);
