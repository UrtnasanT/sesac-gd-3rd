//click event
$(".container").click((e) => {
  console.log("event", e); //even 객체
  console.log("event.target", e.target).css("background-color", "skyblue"); //even 객체
  $("e.target").css("background-color", "skyblue"); //even 객체
  //   $(".container").css("background-color", "skyblue"); //even 객체
});

//  mouseover event
$(".container").mouseover(() => {
  console.log("마우스 올라감");
});

// mouseout 이벤트 -> 해당 요소에서 마우스가 나갔을 때 실행
$(".container").mouseout(() => {
  console.log("마우스나감");
});

//hover event => css에서 더 많이 작성
// mouseoever, mouseout를 한 번에 지정 -> 인자로 함수 2 개 작성
// 첫 번째 인자인 콜백함수는 mouseover일 대 실행할 것

// scroll event
$(document).scroll(() => {
  console.log("스크롤 발생");
});

//mouse event
// key event: 선택한 요소에서 키워드 누른는 이벤트가 발생할 경우
// 키워드 누르고 있는 동안에서 계속 이벤트 발생
// 실시간 입력을 처리하거나 특수 키(ex. 화살표 키, enter 키, 등) 를 감지하는데 사용

// keyup 이벤트: 선택한 요소에서 키보드를 ㄸ때는 이벤트 발생할 경우
// 키보드를 누르고 있는 동안에는 이벤트가 발생하지 않음
// 사용
$("input[name=pw]").keydown,(e) => {
    console.log('event', e);
    console.log('e.key', e.key);
    if (e.key === 'Enter'){
        console.log('엔터를 입력했습니다');
        console.log(e.target.value);
    }
};
// keyup 이벤트 
// on(): 이벤트를 걸겠다. addEventListener와 비슷
$('input[name=pw]').on('keyup'), (e) => {
    console.log('e.key', e.key);
    if(e.key === 'Enter'{
        console.log(e.target.value);
    });
};