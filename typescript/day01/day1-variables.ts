// // 変数は let or const だが基本const推奨
// const PI: number = 3.14159;
// let count: number = 0;

// // 配列 中身は変更(追加)できる
// const numbers: number[] = [1,2,3];
// numbers.push(4);  // numbers = [4, 5] はNG

// // プリミティブ型は 値:number, 文字列:string, 真偽:boolean, 配列:Array

// // オブジェクト
// const user: { name: string; age: number; isAdmin: boolean} = {
//     name: "mikan",
//     age: 30,
//     isAdmin: false
// };

// interface User {
//     name: string;
//     age?: number;   // ?でオプショナル
//     isAdmin: boolean;
// }
// type Point = {
//      x: number;
//      y: number;
// };
// // typeは Union型を定義できるのが違う(プリミティブ型のエイリアスができる)
// type Status = "loading" | "success" | "error";
// type ID = string | number;
// type Age = number;

// 練習問題
// 問題1: 基本的な変数宣言
const name: string = "mikan";
let age: number = 25;
age++;
console.log(`${name} is ${age} years old`);

// 問題2: 配列操作
const numbers: number[] = [10, 20, 30];
numbers.push(40);
console.log(numbers[0]);
console.log(numbers.length);

// 問題3: オブジェクトと型定義

// 商品情報
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

let fruit: Product = {
    name: "りんご", price:150, inStock:true
};

fruit.price += 10;
console.log(`${fruit.name},${fruit.price},${fruit.inStock}` );
