console.log$(".testSelector");

// $() 선택자는 우리가 이전에 선택했던 방법과 다르게 jquery를 사용하기 우ㅟ해
// 만들어진
// - $ : 식별자
//  -$(): HTML 요소를 선택하는 함수
//  해당하는 모든 요소가 선택됨 -> querySelectorAll과 비슷
// 여러개의 요소에 동일한 동작을 구현할 때 반복문으로 돌면서 지정할 필요 x
$(".testSelector").addEventListener("click", () => {
  alert("클릭됨");
});
// -------------------------------------
// .var() : input의 값을 가져오기 & 수정하기
function useVal() {
  // value값 가져오기
  //   const value = $("input");
  //   const value = document.querySelector("input").value;
  //   j.query .val() 사용

  console.log(value);

  //   js
  // const value = doc
  $("input").val("수정할 값 작성하기");
}

// -----------------------------------------
// attr(): 요소의 속성을 추가, 수정, 가져오기
function useAttr() {
  // jquery
  $("input").attr("placeholder", "이름을 입력하세요");
  $("input").attr("placeholder", "이름을 입력하세요");
  $("input").attr("type", "checkbox");
  console.log($("input").attr("type"));
}

// ------------------------------------------------
function useText() {
  console.log($("#span").text);
}
// html() : 요소의 content(html 형식)를 가져오거나 수정

function useHtml() {
  // #span의 content(html) 가져오기
  console.log($("#span").html());
  $("#span").html("이건 html 메서드 사용해서 <br> 수겅한거야 <br>");
}

// .css() : css(style) 변경
function useCss() {
  // 변수에 담아 사용하기
  const span = $("#span");
  span.css("fontt-size", "30px");
}
// js
document.querySelector("#span").style = "font-size: 30px";
