// var emailSign = localStorage.getItem("email");
// var passwordSign = localStorage.getItem("password");
// var inp_id = localStorage.getItem("id");


var urlParams = new URLSearchParams(window.location.search);
var inp_id = urlParams.get('id');

if (loginEmail && loginPasswordlogin) {
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var products = JSON.parse(xhr.response);
      for (var inf of products) {
        if (inf.id == inp_id) {
          document.getElementById("product_category").innerHTML = inf.category;
          document.getElementById("product_img").src = inf.image;
          document.getElementById("product_title").innerHTML = inf.title;
          document.getElementById("product_rating").value = inf.rating.rate;
          document.getElementById("product_count").innerHTML = "Rated by: " + inf.rating.count + " users";
          document.getElementById("product_price").innerHTML = "PRICE: " + inf.price + "$";
          document.getElementById("product_description").innerHTML = inf.description;
          document.getElementById("button").innerHTML = "<button id='single_product_button' class='btn btn-secondary col-6' onclick='addToCart(" + inf.id + ")'>add to cart</button>";
        }
      }
    }
  });
} else {
  // alert("Please log in to see the product details.");
  location.assign("../pages/signIn.html");
}
