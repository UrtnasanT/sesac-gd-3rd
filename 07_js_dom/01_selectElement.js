/* 요소 선택
- querySelector('css 선택자')
- querySelectorAll('css 선택자')
- getElementbyId('id값')
- getElementbyClassName('class값')
- getElementsByTagName('태그명')
*/
//document

console.log(document);
console.log(document.documentElement); //html 문서 내의 모든 element(요소)들을 가져옴
console.log(document.head);
console.log(document.body);
console.log(document.URL);
console.log(document.domain);

//1.getElementByid
console.log(document.getElementById("green"));
console.log(document.getElementById("gold"));

// 2. getElementByClassName
// 동일한 클래스를 가진 욧소가 여러게 있을 수 있으므로 elements()
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

// 3. getElementsByTagName
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("div"));

// 4. querySelector
//css에서 사용했던 선택자 이용해ㅐ 요소 선택
//해당 css 선택자 중에서ㅓ 일티하는 첫 번째 욧소만 ㅅ선택됨 -> 하나만 선택
console.log("querySelector");
console.log(document.querySelector("#green"));
console.log(document.querySelector("#pink"));
console.log(document.querySelector("div.pink"));
console.log(document.querySelector("body div"));

//5. querySelectorAll
//console.log('querySelector')
console.log(document.querySelectorAll("div.pink"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("div.pink"[2]));

//NodeList와 HTMLCollection
//getElementBy~~ -> HTML Collection -> js에서 노드를 성성하거나 삭제하는 변경하는 변경 감지
//querySelectorAll -> NodeList
//HTMLCollection, Nodeelist -> 유사 배열

//유사 배열
//length 속성을 가짐
//[]로 접근 가능 -> 인덱스로 접근 가능
//표준 객체 메섣드 사용 불가(map)
//하지만 forEach는 사용 가능

//for of 문으로 pink 클래스 모두 출력하기
let pinks = document.querySelectorAll(".pink"); //pink 클래스로 가진 모든 욧소 배열
for (let el of pinks) {
  console.log(el);
}
