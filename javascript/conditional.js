console.log("connected");
if (5 > 3) {
  console.log("5 > 3");
}
// 5 > 7 경우 -> 다음 코드 블럭으로 넘어갑니다
let number = Number(prompt("숫자를 입력해주세요. "));
// if (number > 10) {
//   console.log("입력받은 수가 10보다 큽니다");
// } else {
//   console.log("입렵받은 수가 10보다 작습니다");
// }

if (number > 10) {
  console.log("입력받은 수가 10보다 큽니다");
} else if (number === 10) {
  console.log("입력받은 수가 10입니다");
} else {
  console.log("입력받은 수가 10보다 작습니다");
}

// 성적 계산하는 프로그램
// 조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
//조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 false 였을 잊지 않기
const score = Number(prompt("점수을 입력해주세요. "));
if (score > 100) {
  console.log("점수를 잘 못입력되었습니다. ");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
const age = Number(prompt("나이: "));

if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else if (age >= 0) {
  console.log("유아");
} else {
  console.log("점수를 잘 못입력되었습니다. ");
}

if (age >= 0 && age < 8) {
  console.log("유아");
} else if (age < 14) {
  console.log("초등학생");
} else if (age < 17) {
  console.log("중학생");
} else if (age < 20) {
  console.log("고등학생");
} else if (age < 150) {
  console.log("성인");
} else if (age >= 150) {
  console.log("Not possible");
} else {
  console.log("Check again!");
}
console.log("----------------------------------");
//조건문 충첩하기

const userID = "user01";
const userPwd = "1234qwerty";

//조건문 함수로 구현

/**
 *
 * 입력 받은 아이디와 비밀번호가 맞는지 확인 적ㄱ절한 알림창 뜨움
 */
function loginUser() {
  const inputId = prompt("ID: ");
  const inputPwd = prompt("PWD: ");

  if (userID === inputId) {
    if (userPwd === inputPwd) {
      console.log("login successful!");
      alert(`안녕하세요, ${inputId}님`);
    } else if (inputId == " ") {
      alert("아이디가 입력되지 않았습니다. ");
    } else {
      console.log("로그인 실패");
      alert("비밀번호를 다시 입력해주세요. ");
    }
  } else {
    alert("아이디를 다시 입력해주세요. ");
  }
}

// switch 문
// switch의 괄호 안과 case의 조건으로 비교식이 들어갈 수 없음
let x = 4;
switch (x) {
  case 3:
    console.log("x는 3입니다.");
    break;
  case 4:
    console.log("x는 4입니다.");
  // break;
  case 5:
    console.log("x는 5입니다.");
    break;
  // break 작성하지 않으면 case 4를 실행하고 싶을 때 case 5까지 모두 실행된
  // 해당 스코프를 빠져나가지 못하는 것
  // 원하는 코드가 실행된 이후 꼿 break 사용해 스코프를 빠져나올 수 있도록 작성
  // break 이후에 작성한 코드는 실행되지 않는다
  default:
    console.log("x는 3, 4, 5가 아닌 다른 값입니다.");
}
number = -5;
switch (parseInt(number / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
  case 7:
    console.log("7");
  case 6:
    console.log("6");
  default:
    console.log("F");
}

// 조건식? 조선이 참인 경우: 조건이 거짓인 경우:
//- 한줄로 잔단히 표현 가능
let name = "나산";
name == "나산" ? console.log("맞았어요 🥰") : console.log("틀렸어요 😕");

let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

// 삼항연산자로 변환
num % 2 === 1 ? console.log("홀수") : console.log("짝수");

let fruit = "banana";

console.log(fruit === "banana" ? "바나나 입니다" : "바나나가 아닙니다");
let isLoggedIn = true;
isLoggedIn === true ? console.log("O") : console.log("X");
isLoggedIn === true
  ? number > 10
    ? "로그인한 유저인데, number 값이 10보다 큼"
    : "로그인한 유저인데, number 값이 10보다 작음"
  : "로그인지 않은 유저";
