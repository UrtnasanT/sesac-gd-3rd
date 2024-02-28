// let index = 0;

// while (index < 10) {
//   console.log("인사를 ", index + 1, "뻔재 드립니다! 😆");
//   index++;
// }

// /*
// while(조건){
//     조건에 만족하는 ㄷ동안 실행될 코드
// }

//     조건 제어하는 구문이 없기 때문에 무한 루프에 빠지지 않도록 주의해서 사용

// */
// let num = 1;
// while (num <= 5) {
//   console.log(num);
//   num++;
// }
// let num2 = 9;
// while (num2 >= 4) {
//   console.log(num2);
//   num2--;
// }
// let num3 = 1;
// while (num3 <= 10) {
//   if (num3 % 2 === 0) {
//     console.log(num);
//   }
//   num3++;
// }
// console.log("-------------------------------------------------------");
// let num4 = 10;
// while (num4 >= 1) {
//   if (num4 % 2 !== 0) {
//     console.log(num4);
//   }
//   num4--;
// }

// //무한루프 -> 조건이 영원히 참일때

// let num5 = 0;
// while (true) {
//   console.log(num5);
//   num5++;
//   if (num5 > 10) {
//     break;
//   }

// num5 = 0;
// while (confirm("계속 할까요?")) {
//   // confirm의 확인 버튼은 true,췻소 버튼은
//   num5++;
//   alert(`${num5}번째 alert 창`);
// }

//practice-1

let num = 0;
let sum = 0;
while (num <= 100) {
  if (num % 2 === 0 || num % 5 === 0) {
    sum = sum + num;
  }

  num++;
}

console.log(sum);

//practice 2-1
let number = 0;
while (number <= 10000) {
  if (number % 13 === 0 && number % 2 === 1) {
    console.log(number);
  }
  number++;
}
//practice 2-2;
console.log("======심화=======");
let index = 0;
let user_number = parseInt(prompt("Enter a number:"));
while (index <= user_number) {
  if (index % 13 === 0 && index % 2 !== 0) {
    console.log(index);
  }
  index++;
}
