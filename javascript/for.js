//for문
// for( for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/감소할지 잓성); 증감){
//반복할 카드}

//i++: 변수:
for (let index = 0; index < 10; index++) {
  console.log("인사를", index + 1, "번째 드립니다!");
}

for (let i = 0; i < 10; i++) {
  console.log(`안녕 ${i}`);
}

for (i = 0; i < 10; i += 3) {
  console.log(i);
}

//1부터 5까지 1씩출력하는 방법
// 1. i++

for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }
let n = 10;
let result = 0;
for (let i = 1; i <= n; i++) {
  result = result + i;
}
console.log(result);

//for문과 배열 함께 사용하기
//배열의 모든 욧소를 출력하지
let cafe = ["americano", "latte", "espresso", "tea"];
console.log(cafe.length);
for (let i = 0; i < cafe.length; i++) {
  console.log("cafe menu", cafe[i]);
}

// 배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 55];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
  console.log(numSum);
}
console.log(numSum);

//if and for 함께 사용
//짝수만 출력
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
for (let i = 1; i < 10; i++) {
  console.log(`------------------${i}단---------------------`);
  for (a = 1; a < 10; a++) console.log(`${i} * ${a} = ${a * i}`);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
  for (j = 0; j < 10; j++) {
    console.log(`현제 i는 ${i}, j는 ${j}입니다`);
  }
}
