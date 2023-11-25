var inp_category = localStorage.getItem("category")
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    for (var inf of products) {
      if (inf.category === inp_category) {
        // console.log(inf);
        var productsSection = document.getElementById("category_section")
        productsSection.innerHTML +=
          "<div class='product_card'> <div class='category'>" + inf.category
          + "</div> <div><img class='category_img div_image' onclick='singleProduct(" + inf.id + ")' src=" + inf.image
          + "> </div> <div class='category_title' onclick='singleProduct(" + inf.id + ")'>" + inf.title
          + "</div><div class='price'>" + inf.price
          + "$</div><progress min='0' max='5' value=" + inf.rating.rate
          + "></progress><button id='myButton' class='btn col-12 ' onclick='addToCart(" + inf.id + ")'>add to cart</button></div>"
      }
    }
  }
});