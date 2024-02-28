//   기본형 (Primitive type)
// string
// 문자 타입
const aa = "a";
console.log(aa);
console.log("원하는 텍스트콘솔창에 출력");
console.log(aa, "원하는 텍스트 콘솔창에 출력");
console.log(aa + "원하는 텍스트 콘솔창에 출력");
console.log(`${aa} 원하는텍스트 콘솔창에 출력`);
const name = "Nasan";
console.log("나는", name, "야!");
console.log(`안녕 나는 ${name} 야 ~`);
// 숫자 타입
let number = 7;
//boolean
let isHappy = true;
console.log(typeof isHappy);
// undefined:값이 없다
let undef;
console.log(undef);
// null:
let empty = null;
console.log(empty);

const myName = "신데렐라";
const email = "glassshoes@gmail.com";
const gender = "female";
console.log(myName, email, gender);

console.log(`안녕 나는 ${myName} 입니다`);

// number type
// 정수, 소수
let numberType = 123;
let opacity = 0.7;
let add = 1 + 3;
console.log(numberType, opacity, add);

// boolean
let checked = true;
let isShow = false;

// undefined
let undefinedType;
let obj = {
  key: 123, //key: value;
};
console.log(obj.key); // use period(.) to access keys;
console.log(obj.efj);

// null: 값이 없을때

// array - 배열
// 순섣다 있는 데이터의 묶음

let fruitsArray = ["apple", "orange", "banana", "grape"];
// while {
//     console.log()
// }
console.log(fruitsArray);
let fruitsArray2 = new Array("apple", "orange", "banana", "grape");
console.log(fruitsArray[0]); //2번 인덱스 요소를 뽑아 콘ㅅ솔에 찍기

let arr = [1, "string", true, null, undefined];
console.log(arr);

// Quiz
const letters = [
  "사",
  "스",
  "자",
  "크",
  "진",
  "안",
  "리",
  "이",
  "가",
  "수",
  "림",
  "나",
  "아",
  "으",
  "차",
  "운",
];
console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);

// 배열 응용

// 배열 안에 배열이 있는 형태

// 다차원 배열
const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "너", "녀"],
  ["다", "댜", "더", "뎌"],
];

console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);
console.log(korean[1][1]);
//object

const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

// object: 객체
// 배열은 순섣다 있는 반면에 객체는 키-값 형태로 작성
//{key1; value1, key2: value2}

let cat = {
  name: "장화",
  age: 13,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};
console.log(cat);

// 점 표시법
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew);

// 배활호 사용
console.log(cat["name"]);
console.log(cat["isCute"]);
cat.name = "홍련";
console.log(cat);

let dog = {
  name: "Lucky",
  age: "13",
  isLucky: true,
  mew: function () {
    return "came back safe";
  },
};

console.log(dog["isLucky"]);

// 객체)object
// - array (배열)
// - object (객체) -> 키-값을 쌍으로 가지고 중괄호{} 안에 감싸여 작성도ㅚㄴ 것

// JS의 이상람 자동 형변환

let a = "3";
let b = 2;
let c = "10";
console.log(a + c); //'310' 문자의 나열
console.log(a - c); //-7 -> 숫자가 됨

//숫자 + 문자
console.log(b + a); //'23'
console.log(b - a); //-1 -> 문자가 숫자로 변환되어 계산됨 * -,/도 동일

let me = {
  name: "nasan",
  job: "frontend developer wannabe",
  interest: ["코딩", "명상", "공부"],
  hobby: ["여행", "등산"],
  isHappy: true,
};
console.log(me);

// 자료형 확인
// typeof

console.log("----------------------------------------");
console.log(typeof "문자열");
console.log(typeof 123);
console.log(typeof {});
console.log(typeof []);
console.log(typeof NaN); //NaN; Not a Number
let und;
console.log(typeof und);

// 형 변환 -> change type
console.log("---------------------------------");
//1. ? -> 문자
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(String(str1));
console.log(typeof String(str1));
console.log(str2.toString());

let n1 = true;
let n2 = false;
let n3 = "12345";
let n4 = "123.9";
console.log(Number(n1));
console.log(Number(n2));

console.log(Number(n3));
console.log(Number(n4));

console.log(parseInt(n3));
console.log(parseInt(n4));

console.log(parseFloat(n3));
console.log(parseFloat(n4));
// prompt("값을 입력해주세요");

let mathScore = "77";
let engScore = "88";
let avgScore = (parseInt(mathScore) + parseInt(engScore)) / 2;
console.log(avgScore);

// prompt("값을 입력해주세요");
let mathScore2 = Number(prompt("Math score: "));
let engScore2 = Number(prompt("English score: "));
let avgScore2 = (mathScore2 + engScore2) / 2;
alert(`Average score: ${avgScore2}`);
