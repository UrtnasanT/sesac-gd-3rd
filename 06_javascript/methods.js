//문자열에서 사용 가능한 속성ㄷ돠 매서드
//length, toUppereCase, toLowerCase(), trim(), split(), indexOf(), replace(), replaceAll(), slice(), repeat()
//지금까지는 우리가 직접 함수를 만들어 사용
//메서드는 자바스크립트에서 만들어 놀은 함수

let str = "Strawberry Moon";
let str2 = "Strawberry Moon   ";

console.log(str[1]); //t
console.log(str[0]); //S
console.log(str[0] + str[3]);
//
console.log(str[0] + str[12] + str[14] + str[14] + str[9]);
console.log("str 문자열 길이", str.length);
console.log("str 문자열 길이", str2.length);

// 인자가 없는 메소드: XX.method() 형태
//-toUpperCase()
//-toLowerCase()
//-trim()

let msg = "Happy Birthday!";
let userId = "         user123";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.length);
console.log(userId.trim());
console.log(userId.trim().length);
//userId
console.log(userId.trim().toUpperCase());
console.log(userId.trim().toUpperCase().length);

//인자 있는 메서드: xx.method(arg)
// - indexOf(): 문자열에서ㅓ 인자로 받은 문자열의 인젝스를 반환, 없다면 -1 반환
// - replace():
// - replaceAll():
// - slice(startIdx[, endIdx]: startIdx ~ endIdx -1 까지 자름)
// - repeat(n)
// - split()
// - charAt(n): 인자로 받은 숫자 n 인덱스 번호에 대한 문자열 하나 반환

let fruit = "applemango";
console.log(fruit.indexOf("apple")); //0
console.log(fruit.indexOf("mango")); //5
console.log(fruit.indexOf("z")); // -1

console.log(fruit.charAt(8));
console.log(fruit.charAt(5));

console.log(fruit.slice(5));
console.log(fruit.slice(3, 6)); //exclude index [6]
console.log(fruit.slice(-1)); //o 가장 마지막 인덱스를 선택하고 싶을 때
console.log(fruit.slice(-3)); // ngo 가장 마지막 인덱스를 선택하고 싶을 때

let msg2 = "Wow! It's so amazing!!! Wow!!!!";
console.log(msg2.replace("Wow", "OMG"));
console.log(msg2.replaceAll("Wow", "OMG"));
console.log(msg2);

let date = "2024.02.29";

console.log(date.replaceAll(".", "-"));

console.log("Hello World! \n".repeat(5));
console.log(date.split("."));

//--------------------------
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "panda", "dog", "capybara"];

arr1[5] = 6;
console.log(arr1);
arr1[7] = 8;

console.log(arr1);
//push 배열 요소 추가
arr1 = [1, 2, 3, 4, 5];
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1); //[1, 2, 3, 4, 5, 10, 20, 30] -> arr1

//pop -> 배열 마지막 요소 제거
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

//unshift(): 맨 앞에 요소 축가

arr2.unshift("bear");
console.log(arr2);

//shift():맨 앞 요소 제거
arr2.shift();
console.log(arr2);

//push, pop, unshift, shift -> 문자열에서 메서드를 사용한 것과 다르게 워ㅓㄴ래의 배열이 변경됨

//includes(): 해당 배열에 인자로 받ㄷ은 값과 ㄷ동일한 요소가 있는지 확인 후 t/f를 반환

console.log(arr2.includes("quakka")); //true

//indexOf: index of an object(?)
console.log(arr2.indexOf("capybara"));

//length -> 속성이므로 괄호 작성 x
console.log(arr2.length); //4

//reverse(): 배열의 순서를 튀집음 -> 배열을 변경시킴
console.log(arr2.reverse());

//join():  배열을 인자로 받은 문자열로 합친다
console.log(arr2); //인자를 작성
console.log(arr2.join()); //인자를 작성
console.log(typeof arr2.join());
console.log(arr2.join("")); //빈 문자열

//-----------------------------------------------
//배열에서ㅓ의 반복문
//for
let arr3 = [1, 2, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e", "f"];
let fruits = ["apple", "banana", "watermelon"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
console.log("------------------------------------");
//for of
//여기서 number 는 for of 문엣서 내가 지어준 변수명
//무엇을 의미하는지 알 수 있도록 작성
//index 번호로 순환하는 것이 아니라 배열 요소에 직접 접근
for (let number of arr3) {
  console.log(number);
}
console.log("------------------------------------");
for (let alphabet of alphabets) {
  console.log(alphabet);
}
console.log("------------------------------------");

//forEach()
//매개변소 3개를 받는 배열의 반복을 위한 메서드(=함수)
// 메개변수 이름은 마음대로 지얻도 상관 없지만 순서에 따른 의미는 항상 동일
// 순서 아주 아주 중요함!!!!!
/*
        arr.forEach(function(여서를 지칭할 발명[index 지칭할 별명[,arr를 짗칭할 별명]))
*/
arr3.forEach(function (num, idx) {
  console.log("#", num);
  console.log("index:", idx);
});

console.log("------------------------------------");
//filter: 조건을 만족하는 요소를 '배열'로 반환

let newArr2 = arr2.filter(function (animal) {
  return animal.length >= 5;
});

//화살표 함수 1

// let newArr4 = arr2.filter(animal -> animal.length >= 5);

//화살표 함수 2

console.log(newArr2);
console.log(arr2);

const words = ["미어켓", "라이거", "유니콘", "드래건", "라쿤"];

const newWords = words.filter(function (ani) {
  return ani.charAt(0) === "라" || ani.charAt(0) === "유";
});
console.log(newWords);
//find
//map(): 배열 내의 모든 원소에 대해 호출한 함수의 결과를 모아 새로운 배열 반환

let findResult = words.find(function (ani) {
  return ani.charAt(0) == "드";
});
console.log(findResult);

//map(): 배열 내의 모든 원소에 대해 호출한 함수의 결과를 모아 새로운 배열 반환
//arrMap(function(value[,index[, arrr]]){})
//배열의 모든 원소를 for문으ㅡ로 돌려서 버꿀 수 있지만 더 단단드를 ㅅ사용해 변ㅅ셩
let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});

console.log(mapArr); //100, 200, 300, 400, 500
