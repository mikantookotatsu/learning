// 関数例 定義まででも呼び出しできる
console.log(add(2, 3));

function add(a: number, b: number): number {
    return a + b;
}

const subtract = function(a: number, b:number): number {
    return a - b;
}
console.log(subtract(5, 2));  // これは変数なので定義後

// アロー関数
const addArrow = (a: number, b: number): number => a + b;
// 引数1つ
const square = (x: number): number => x * x;
// 引数なし
const greet = (): string  => "Hello!";
// オブジェクト
const cratePerson = (name: string, age: number): { name: string; age: number } => ({ name, age });
const correct = (x: number) => ({ x: x }); // 

console.log(correct(10));

// 高階関数
const func = (x: number) => (y: number):number => x * y;
const multi2 = func(2); multi2(5); // 2 * 5 = 10

// オブジェクトメソッド
interface Calculator {
    add: (a: number, b: number) => number;
}
const calc: Calculator = { add: (a, b) => a + b };

// 即時実行関数
const config = (() => {
    const env = "production";
    return { env };
})();
console.log(config.env);

// 配列操作
// map(各要素処理) / filter(抽出) / reduce(各要素の集約)

// function は基本使わない
// 型注釈を入れる any は避ける

// 練習問題
const multiply = (x: number, y: number): number => x * y;
const sum = (numbers: number[]): number => {
    return numbers.reduce((acc, x) => acc + x, 0);
    // acc: 累積値, x: 現在値 
}

// 文字列を受け取って、逆順にする
const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}
console.log(sum([1, 2, 3, 4, 5])); // 15

const createAdder = (x: number) => (y: number): number => x + y;
