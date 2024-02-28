console.log("connected!");
// 대입 연산자: =
// ex. let a = 1;
// 변수에 값을 할당할 때 사용

// 비교 연산자
// ==, !=
// 피연산자의 값이 같인지 비교
// ==: type이 달라도 괜찮음 -> 값만 비교하기 때문
console.log(1 == 1);
console.log(1 == 2);
console.log(1 == "1");

// ===, !==
// 엄격한 동등 연산자
console.log("--------------------------------------------------------");
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === "1");

// 크기 비교
console.log("--------------------------------------------------------");
console.log(2 > 1);
console.log(1 >= 1);

// 산술 연산자
// +. -, *, /, %(나머지), **(제곱)
console.log("--------------------------------------------------------");
console.log(1 + 2);
console.log(1 / 2);
console.log(1 * 2);
console.log(1 % 2);
console.log(1 ** 2);

// 논리 연산자 : !, &&, ||
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(true && true);
console.log(true || true); //true

// 연산자 응용
console.log(!(2 > 1)); // (!): 느낌표

//Quiz

console.log(3 <= 1); //false
console.log(7 == "7"); //true
console.log(-10 >= -11); //true

// 문자 타입
const aa = "a";
console.log(aa);
console.log("원하는 텍스트 콘솔창에 출력");
console.log(aa, "원하는 텍스트 콘솔창에 출력");
console.log(aa + "원하는 텍스트 콘솔창에 출력");
// console.log({ aa `원하는 텍스트 콘솔창에 출력}`);
const name = "Nasan";
console.log("나는", name, "야!");
console.log(`안녕 나는 ${name} 야 ~`);

// 숫자 타입
let number = 7;

// boolean
let isHappy = true;
console.log(typeof isHappy);

// undefined: 값이 없다
let undef;
console.log(undef);

// null:
let empty = null;
console.log(empty);
