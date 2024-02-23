console.log("Hello, JavaScript!");

/* var 키웓드 사용해보겠습니다!
1. 변수 선언 -> 값 할당
2. 변수 선언과 값 할당을 동시에
*/
// 변수 선언
var varName; //undefined
// 변수 할당
varName = "Nasan";
// 변수 선언과 값 럳덩울 동시에
var varName = "Nasan";

console.log(varName);
console.log("varName");

varName = "Urtnasan";
console.log(varName);

// 장점이 보일 수 있으나, 유지보수할 때 최악임
aa = 123;
console.log(aa);

// let 키워드
// 변수 선언
let letName;
// 값 선언
letName = "John Markson";
console.log(letName);
// 변수 선언과 값 할당을 동시에
let letName2 = "Mark Johnson";
console.log(letName2);
// let letName2 = "Mark Something"; //error: letName2 cannot be used again
// console.log(letName2);
letName2 = "Mark Togtokhsuren"; //재할당 가능
console.log(letName2);
// ; -> 온지 or 점 or 심표

// 재할당 불가능;
const yearOfBirth = 1998;
console.log(yearOfBirth);

const constName = "Nasan";
console.log(constName);
