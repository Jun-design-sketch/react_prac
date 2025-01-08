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

