// 上書き、再宣言可能
var val1 = "var宣言";
console.log(val1);

val1 = "varの上書き";
console.log(val1);

var val1 = "varの再宣言";
console.log(val1);

// 再宣言不可
let val2 = "let宣言";
console.log(val2);

val2 = "letの上書き";
console.log(val2);

// 上書き、再宣言不可
const val3 = "const宣言";
console.log(val3);

const val4 = {
    name: "たろう",
    age: 25
};
val4.name = "じろう";
val4.address = "東京";

console.log(val4);

const val5 = ["あああ", "いいい", "ううう"];
val5[0] = "えええ";
val5.push("おおお");

console.log(val5);

// テンプレート文字列
const name = 'たろう';
const age = 28;
console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// アロー関数
const func1 = str => str;
console.log(func1("func1です"));

const sum = (num1, num2) => ({
    num1: num1,
    num2: num2
});
console.log(sum(10, 20));

// 分割代入
const profile = {
    name1: "たろう",
    age1: 28
};
const { name1, age1 } = profile;

console.log(`私の名前は${name1}です。年齢は${age1}歳です。`);

const profile2 = ["じろう", 25];
const [name2, age2] = profile2;

console.log(`私の名前は${name2}です。年齢は${age2}歳です。`);

// デフォルト値
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
sayHello();
sayHello("たろう");

const profile3 = {
    age3: 31
};
const { age3, name3 = "ゲスト" } = profile3;

console.log(`名前：${name3}, 年齢：${age3}`);

// オブジェクトの省略記法
const name4 = "たろう";
const age4 = 27;

const profile4 = {
    name4,
    age4
};
console.log(profile4);

// スプレッド構文
const arr1 = [1, 2];
const sumFunc = (num3, num4) => console.log(num3 + num4);

sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [number1, number2, ...arr3] = arr2;
console.log(number1);
console.log(number2);
console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4]; // 配列のコピー
const arr7 = [...arr4, ...arr5] // 配列の結合
arr6[0] = 50;

console.log(arr6);
console.log(arr7);

// 三項演算子
const num = "1300";
const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum);

const checkSum = (num5, num6) => { return num5 + num6 > 100 ? "100を超えています" : "共用範囲内です" };
console.log(checkSum(60, 40));

// map
const nameArr = ["佐藤", "田中", "山田", "たろう"];
console.log(nameArr.map((name, index) => `${index + 1}番目は${name}です`));

const newNameArr = nameArr.map(name => name != "たろう" ? `${name}さん` : name);
console.log(newNameArr);

// filter
const numArr = [1, 2, 3, 4, 5];
console.log(numArr.filter(num => num % 2 != 0));

//truthy, falsy
const val6 = "ABC";
console.log(val6 ? `${val6}はtruthy` : `${val6}はfalsy`);

const val7 = 0;
console.log(val7 ? `${val7}はtruthy` : `${val7}はfalsy`);

const val8 = 10;
console.log(val8 ? `${val8}はtruthy` : `${val8}はfalsy`);

const val9 = undefined;
console.log(val9 ? `${val9}はtruthy` : `${val9}はfalsy`);

const val10 = null;
console.log(val10 ? `${val10}はtruthy` : `${val10}はfalsy`);

const val11 = false;
console.log(val11 ? `${val11}はtruthy` : `${val11}はfalsy`);

const val12 = NaN;
console.log(val12 ? `${val12}はtruthy` : `${val12}はfalsy`);

const val13 = [];
console.log(val13 ? `${val13}はtruthy` : `${val13}はfalsy`);

const val14 = {};
console.log(val14 ? `${val14}はtruthy` : `${val14}はfalsy`);

const val15 = "";
console.log(val15 ? `${val15}はtruthy` : `${val15}はfalsy`);

const num7 = null;
const num8 = 100;
// 左側が truthy であればその時点で返却する
console.log(num7 || "未設定");
console.log(num8 || "未設定");

const num9 = 100;
const num10 = null;
// 左側が falsy であればその時点で返却する;
console.log(num9 && "設定済み");
console.log(num10 && "設定済み");