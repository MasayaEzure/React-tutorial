// 上書き、再宣言可能
var val1 = "val1";
console.log(val1);

val1 = "上書き済み"
console.log(val1);

var val1 = "再宣言";
console.log(val1);

// 再宣言不可
let val2 = "let";
console.log(val2);

val2 = "上書き"
console.log(val2);

// 上書き、再宣言不可
const val3 = "const";
console.log(val3);

// オブジェクトはプロパティの変更が可能
const val4 = {
    name: "たろう",
    age: 25
};
console.log(val4);

val4.name = "じろう";
val4.age = 28;