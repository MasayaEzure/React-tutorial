// 上書き、再宣言可能
var val1 = "var宣言";
// console.log(val1);

val1 = "varの上書き"
    // console.log(val1);

var val1 = "varの再宣言";
// console.log(val1);

// // 再宣言不可
let val2 = "let宣言";
// console.log(val2);

val2 = "letの上書き"
    // console.log(val2);

// // 上書き、再宣言不可
const val3 = "const宣言";
// console.log(val3);

const val4 = {
    name: "たろう",
    age: 25
};
val4.name = "じろう";
val4.address = "東京";

// console.log(val4);

const val5 = ["あああ", "いいい", "ううう"];
val5[0] = "えええ";
val5.push("おおお");

// console.log(val5);

// テンプレート文字列
const name = 'たろう';
const age = 28;
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// アロー関数
const func1 = str => str;
// console.log(func1("func1です"));

const sum = (num1, num2) => ({
    num1: num1,
    num2: num2
});
// console.log(sum(10, 20));

// 分割代入
const profile = {
    name1: "たろう",
    age1: 28
};
const { name1, age1 } = profile;

// console.log(`私の名前は${name1}です。年齢は${age1}歳です。`);

const profile2 = ["じろう", 25];
const [name2, age2] = profile2;

// console.log(`私の名前は${name2}です。年齢は${age2}歳です。`);

// デフォルト値
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
// sayHello();
// sayHello("たろう");

const profile3 = {
    age3: 31
};
const { age3, name3 = "ゲスト" } = profile3;

// console.log(`名前：${name3}, 年齢：${age3}`);

// オブジェクトの省略記法
const name4 = "たろう";
const age4 = 27;

const profile4 = {
    name4,
    age4
};
// console.log(profile4);

// スプレッド構文
const arr1 = [1, 2];
const sumFunc = (num3, num4) => console.log(num3 + num4);

// sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [number1, number2, ...arr3] = arr2;
// console.log(number1);
// console.log(number2);
// console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

// console.log(arr4);

const arr6 = [...arr4]; // 配列のコピー
const arr7 = [...arr4, ...arr5] // 配列の結合

arr6[0] = 50;
// console.log(arr6);
// console.log(arr7);

// 三項演算子
const num = "1300";
const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum);

const checkSum = (num5, num6) => { return num5 + num6 > 100 ? "100を超えています" : "共用範囲内です" }
console.log(checkSum(60, 40));