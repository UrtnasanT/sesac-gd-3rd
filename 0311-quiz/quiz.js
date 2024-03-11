$("#apple").click(function () {
  $(".fruit").attr("src", "./image/apple.jpg");
});
$("#bananas").click(function () {
  $(".fruit").attr("src", "./image/bananas.jpg");
});
$("#grapes").click(function () {
  $(".fruit").attr("src", "./image/grapes.jpg");
});
$("#peaches").click(function () {
  $(".fruit").attr("src", "./image/peaches.jpg");
});
$("#q").click(function () {
  $(".fruit").attr("src", "./image/q.jpg");
}); 

$(".btn").click((e) => {
  const imgName = $(e.target).attr("id");
  console.log(imgName); //apple. bananas, grapes, paeches 하나로 저장
});
$(".fruit").attr("src", `./image/${imgName}.jpg`);
