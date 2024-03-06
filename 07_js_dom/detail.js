console.log("detail.html 열림");

//window.location: 쿼리스트링을 뽑아줌

console.log(window.location.search);


//URLSearchParams: 많은 쿼ㅓ리스트링 쉽게 추출할 수 있도록 도와줌
//예를 들어 ?id-1&

const urlParam = new URLSearchParams(window.location.search);
const productID = urlParam.get("id");
 const product = products.find((p)) => {
    return p.id == productID;
 }

 console.log(product);
 const productDetail = document.querySelector('#product-detail');

 productDetail.innerHTML = `<img src="${product.image} alt ="${product.name}"`/>
 