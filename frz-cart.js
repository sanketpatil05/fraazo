
var sum = [];
var Cart = JSON.parse(localStorage.getItem("cartData"))||[];

console.log(Cart);

   display(Cart);
  function display(Cart){
    document.querySelector("#cart-items").innerHTML="";
  Cart.map(function (ele, index) {

    var cv = document.createElement("div");
    cv.setAttribute("id", "cart-value");
    var ci = document.createElement("div");
    ci.setAttribute("id", "cart-img");
    var cimg = document.createElement("img");
    cimg.setAttribute("src", ele.imgUrl);
  
    ci.append(cimg);
  
    var ct = document.createElement("div");
    ct.setAttribute("id", "cart-text");
  
    var h3 = document.createElement("h3");
    h3.textContent = ele.name;
    var par = document.createElement("p");
    par.textContent = ele.qty;
    var btn = document.createElement("button");
    btn.textContent = "Remove";
    
  
    ct.append(h3, par, btn);
  
    var cp = document.createElement("div");
    cp.setAttribute("id", "cart-price");
    cp.textContent = "Rs. " + ele.price;
    sum.push(ele.price);
    cv.append(ci, ct, cp);
      document.querySelector("#cart-items").append(cv);
      btn.addEventListener("click",function(index){
        del(index);
      })
  });
  var total = sum.reduce(function (ac, dc) {
    return Number(ac) + Number(dc);
  });
  document.querySelector("#totalprice").textContent = "₹ " + total;
document.querySelector("#btn-cpn").addEventListener("click", dis);
function dis() {
  var cp = document.querySelector("#cpn").value;
  console.log(cp);

  if (cp == "abc20") {
    var discount = total * 0.2;
    console.log(discount);
    document.querySelector("#disc-price").textContent = "-" + discount;
    var tp = total - discount;

    document.querySelector("#tp").textContent = "₹ " + tp;
    document.querySelector("#final-amt").textContent = "₹ " + tp;
  } else {
    alert("Entre valid Coupoun");
  }
}

 }


 function del(index){
     Cart.splice(index,1);
    localStorage.setItem("cartData",JSON.stringify(Cart));
    window.location.reload();
    display(Cart);
 }
