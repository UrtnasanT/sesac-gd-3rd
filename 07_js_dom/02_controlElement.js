// 1. 태그 내부 content 다루기
// - innerText: 요소 안의 택스트 가져와, 입력된 문자열로 수정
// - innerHTML: 요소 안의 코드를 가져오거나 수전

let div1 = document.getElementById("div1");

console.log(div1);

// console.log(div1.innerHTML);

div1.innerText(
  "여기는 첫 번째 div 태그이면서 js에서 <strong> ㅅ수정 </strong> 있었습니다."
);

//해당 요소 내부의 html 변경

div1.innerHTML = "얖 태그이면ㅅ서ㅓ InnerHTML 사용해 수정했습니다";

///================================================
//2. 속성 접근
//요소 속성 가져오기
//요소 .getElement

let naver = document.getElementById(naver);
console.log(naver);

console.log(naver.getAttribute("href"));

let imgE1 = document.getAttribute("src");
console.log(imgE1.src);

//속성 수정

naver.setAttribute("href", "https:www.google.co.kr/");
img.setAttribute("src", "/img/beach2");

let flower = document.querySelectorAll("#flower li");
for (let li of flowers) {
  li.style.backgroundColor = "skyblue";
  li.style.color = "green";
}
console.log(flowers[0].classList);
flowers[0].classList.remove("changeStyle");
console.log(flowers[0].classList.contains("changeStylee"));

flowers[0].classList.toggle("changeStyle");
//=============================================================
//4. 보무 자식 노드

const parentE1 = document.querySelector("#flower");
const childE1 = document.querySelector("#flower .pink");

//자식 노드 선택하기

console.log(parentEl.children);

const container = document.createElement("p");
pE1.innerHTML = "세로 만들어진 p태그";
pE1.style.fontSizee = "30px";
pE1.id = "append-p";
//마지막 자식 요소를 추가됨
//createElement를 사용해 만ㄷ든 요소는 사입해도 한 번만 들억감
console.log(pE1);

container.append(pE1);

const pE12 = document.createElement("p");
pE12.innerHTML = "세로 만들어진 두 번째 태그";
container.append(pE1, pE12, pE12, pE12);

//div 3개 '안녕'

for (let i = 0; i < 3; i++) {
  const newDiv = document.createElement("div");
  divArr.push(newDiv);
  container.append(newDiv);
}

console.log(divArr);
