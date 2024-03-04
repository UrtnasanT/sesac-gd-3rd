/**
 * JJS 표준 내장 객체
 * 자바스크립트다 기본적으로 가지고 있는 객체
 * 
 * String, Number, Array, Date, Math, ...
 
 */

//1. Date 객체
//시간, 날짜에 대한 정보를 얻기 위해 사용

// 현제 날짜

let now = new Date(); // Mon Mar 04 2024 11:48:52 GMT+0900 (Korean Standard Time)
console.log(now);

//1000ms === 1s
//1000ms * 3600 = 1000ms * 60 * 60=== 1s * 60 * 60 = 1h

//1000 * 3600 * 24
//1970년 1월 1일 기준으로 해당 ms만큼 지난 시
let Jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1970);

//new Date(year, month, day, hour, minutes, seconds, ms)
//year: 4자리
//month: 0(1월) ~ 11(12월)
//date: 1~31/ 값이 없으면 1로 처리
//hour, minutes, seconds, ms: 값이 없으면 0으로 처리

console.log(new Date(2021, 2, 15, 18, 30, 15));

//Date 객체 메서드
//연, 월, 일 ㄷ등의 값을 얻을 수 있음
console.log(now.getFullYear() + "년");
console.log(now.getMonth()); // 월 0 - 11
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); //요일: 0 - 6

console.log(now.getDay());
function checkWeekend() {
  switch (now.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "평일";
    case 0:
    case 6:
      return "주말";
    // break;
    default:
      return "알수없음";
    // break;
  }
}
console.log(checkWeekend());

//3. 삼항연산자
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
console.log(todayStatus);

console.log(Math.PI);
console.log(Math.E); //자연 로그

console.log(Math.min(10, 2, 6, -50)); //최소값; 인
console.log(Math.max(10, 2, 6, -50)); //최댁값: 인자로 정ㄷ달받은 값 중 최댁값
console.log(Math.random()); //

console.log(Math.round(3.4)); //소수를 ㅂㄹ
console.log(Math.floor(3.4)); //소수를 버림하여 정수로 변환
console.log(Math.ceil(3.4)); //소수를 버림하여 정수로 변환

//Math.random() 응용

// 0 - 9 사이의 난수
console.log(Math.floor(Math.random() * 100) + 1); //
console.log(Math.floor(Math.random() * 3) + 20); //20 - 22

let guessValue = prompt("Up and Down 게임을 시작합니다!");
while (true) {
  if (guessValue === "그만" || guessValue === "q") {
    alert("게임을 포기하셨습니다 :(");
    break;
  } else if (guessValue == answer) {
    alert(`${answer}!! 정답입니다`);
    break;
  } else if (guessValue > answer) {
    alert("Down");
    break;
  } else if (guessValue < answer) {
    alert("Up");
    break;
  }
}
