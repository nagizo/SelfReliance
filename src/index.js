// const name = "リオネル";
// const age = "メッシ";

// const message = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message);

//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("従来の関数です"));

//アロー関数
// const arrow = (str) => {
//   return str;
// };
// console.log(arrow("アロー関数です"));

//アロー関数を用いて足し算を実行
// const add = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add(10, 10));

// const myProfile = ['George', 3];

// const message = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です}`;
// console.log(message)

// const [name, age] = myProfile;

// const message1 = `私の名前は${ name }です。年齢は${ age }歳です}`;
// console.log(message1)

// const sayHello = (name) => console.log(`こんにちは！${name}さん`);
// sayHello("George");

//スプレッド構文

//配列の展開
// const arr = [1, 2];

// const addFunc = (num1, num2) => console.log(num1 + num2);
// addFunc(...arr);

// 配列をまとめる

// const arr = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr;
// console.log(arr3)

// //配列のコピー、結合
// const arr = [10, 20];
// const arr2 = [50, 60];
// const arr3 = [...arr2]
// console.log(arr3)

// const arr4 = [...arr, ...arr2];
// console.log(arr4)

//map,filerを使った配列処理
// const nameArr = ["田中", "山田", "George"];

// //for文
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目の人は${nameArr[i]}`)
// }

// //map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// //map関数を用いて配列から取り出す
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// //filter
// const numArr = [1, 2, 3, 4, 5];
// const newArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "George") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//三項演算子
//ある条件　？　　条件がtrueの時　: 条件がfalseの時
// const num = 1 > 0 ? "true" : "false";
// console.log(num);

// const money = 10000;
// const formattedNum =
//   typeof money === "number" ? money.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkNum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100以上です'　: '１００以下です';
// }
// console.log(checkNum(50, 10));

// //論理演算子の本当の意味を知ろう　＆＆　,||
// const a = true;
// const b = true;

// if (a || b) {
//   console.log("双方のどちらかがtrueになります");
// }
// if (a && b) {
//   console.log("双方のどちらもtrueになります");
// }

// // || は左側がfalseの時右側が返される。
// // trueなら左が返される
// const num = null;
// const fee = num || "金額は未設定です";
// console.log(fee);

// //左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
