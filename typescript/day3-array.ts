// 配列操作用
const numbers: number[] = [1, 2, 3, 4, 5];

// 商品情報
interface Product {
    name: string;
    price: number;
    quantity: number;
}
const products: Product[] = [
    { name: "Apple", price: 100, quantity: 2 },
    { name: "Banana", price: 50, quantity: 5 },
    { name: "Cherry", price: 200, quantity: 3 },
];

// map
const doubled: number[] = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 10%増税
const withTax = products.map(p => ({
    ...p,
    price: Math.floor(p.price * 1.1)
}));

// filter
const evens: number[] = numbers.filter((num: number) => num % 2 === 0);
console.log(evens); // [2, 4]

const expensiveProducts: Product[] = products.filter((p:Product) => p.price > 100);
console.log(expensiveProducts); // [{ name: "Cherry", price: 200 }]

// reduce 集約 右辺は初期値
const summary: number = numbers.reduce((acc:number, element:number) => acc + element, 0);
console.log(summary); // 15

// find 最初の1つだけ取得
const firstEven: number | undefined = numbers.find((num: number) => num % 2 === 0);
console.log(firstEven); // 2

// forEach 戻り値なし
numbers.forEach((num: number) => {
    console.log(num);
});

// some 条件に1つでも合致すればtrue
const hasEven: boolean = numbers.some((num:number) => num % 2 === 0);

// every すべての要素が条件に合致すればtrue
const allPositive: boolean = numbers.every((num:number) => num > 0);

// findIndex 条件に合致する最初の要素のインデックスを返す
const firstLargeIndex: number = numbers.findIndex((num:number) => num > 3);
console.log(firstLargeIndex); // 3

// メソッドチェーン
const selectedNumber: number[] = numbers
    .filter((num:number) => num % 2 !== 0) // 奇数を抽出
    .map((num:number) => num * num);      // 二乗に変換
console.log(selectedNumber); // [1, 9, 25]

// 練習問題1
const scores: number[] = [45, 78, 92, 35, 88, 100, 62];
const highScores: number[] = scores.filter((s:number) => s >= 60);
const convertScores: number[] = highScores.map((s:number) => Math.floor(s / 10));
console.log(convertScores); // [7, 9, 8, 10, 6]

// 練習問題2
interface User {
  id: number;
  name: string;
  age: number;
  score: number;
}

const users: User[] = [
  { id: 1, name: "Alice", age: 25, score: 85 },
  { id: 2, name: "Bob", age: 30, score: 92 },
  { id: 3, name: "Charlie", age: 22, score: 78 },
  { id: 4, name: "David", age: 28, score: 88 }
];

// 1. スコアが80点以上のユーザーのみ抽出
const highUsers: User[] = users.filter((u: User) => u.score >= 80);
// 2. 名前のみの配列を作成
const userNames: string[] = highUsers.map((u: User) => u.name);
// 3. 結果を表示
console.log(userNames); // ["Alice", "Bob", "David"]

// 練習問題3
const totalPrice: number = products.reduce((acc: number, p: Product) => acc + (p.price * p.quantity), 0 );
// 平均単価を計算
const averagePrice: number = totalPrice / products.reduce((acc: number, p: Product) => acc + p.quantity, 0);
console.log(averagePrice); // 平均単価の表示

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

const tasks: Task[] = [
  { id: 1, title: "買い物", completed: false, priority: "high" },
  { id: 2, title: "掃除", completed: true, priority: "medium" },
  { id: 3, title: "勉強", completed: false, priority: "high" },
  { id: 4, title: "運動", completed: false, priority: "low" }
];

// 1. 未完了のタスクのみ抽出
const incomplatedTasks: Task[] = tasks.filter((t: Task) => !t.completed);
// 2. その中で priority が "high" の最初のタスクを取得
const firstHighPriority: Task | undefined = incomplatedTasks.find((t: Task) => t.priority === "high");

