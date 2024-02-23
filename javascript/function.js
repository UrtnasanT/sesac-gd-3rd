// 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
//1. 명시적 함수 선언문
function helloWorld1() {
  //keyword 'function'
  //hello: 함수 이름
  // (): 매개변수 (인자), parameters, arguments 를 받을 것
  // {}: block/body, 함ㅅ수가 실행될 중과로(?)
  console.log("hello world!");
}

// 함수 호출
console.log(helloWorld1());

//2. 함수 표현식
const helloWorld2 = function () {
  console.log("Hello world II");
};
helloWorld2(); //initialization should come first!

//3. 화살표 함수

const helloWorld3 = () => {
  console.log("hello world III");
};
helloWorld3();

//return: 반환값 -> 함수 내부 코드 "최종 결과 값"
//console.log()로 콘솔을 찍는 것에서 그티지 않고, 함수 내부 코드의 최종 결과값을 저장학고, 보관하기 위한 키워드
/* - 함수 블럭 안엣서 return 키워드를 만나면 함수 실행 중단
 */

//인자 없이 return 값만 가지고 있는 함수
function onePlusone() {
  return 1 + 1;
}

console.log(onePlusone()); //console.log(2)-> 콘솔창에 2 찍음

//() <- 과로

function numPlusOne(num) {
  return num + 1;
}

console.log(numPlusOne(5)); //6을 반환

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));

// 함수의 반환값을 변수에 저장해서 사용
const result = sum(5, 7);
console.log(result);

function sayHello(name) {
  name = prompt(`이름은 뭐에요?`);
  alert(`안녕하세요, ${name}님`);
}
let username;
sayHello(username);
