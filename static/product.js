var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

$(document).ready(function () {

    var product = catalog[GET_PARAM("product_id")];
    $("h2").append(product.name);
    $(".product-img").attr("src", product.thumb);
    $(".game-description").append(product.description);
    for (let i = 0; i < product.pictures.length; i++) {

        if (i == 0) {
            $(".carousel-inner").append('<div class="carousel-item active">');
        }
        else {
            $(".carousel-inner").append('<div class="carousel-item">');
        }
        $(".carousel-inner .carousel-item:eq(" + i + ")").append('<img src="' + product.pictures[i] + '" class="d-block w-100" alt="...">')
    }

    $(".price").append(product.price + " €")
    $(".stock").append(product.quantity)
    var nbCart = 0;
    $(".nb-cart").append(nbCart);
    $(".btn-rm").click(function () {
        if (nbCart != 0) {
            nbCart -= 1
            //   ou equivalent = "nbCart--"
            $(".nb-cart").html(nbCart)
        }
    
    })
    $(".btn-add").click(function(){
        if (nbCart != product.quantity){
            nbCart++;
            $(".nb-cart").html(nbCart);
        }
    })


    var cartList = [];
 
    $("#add-cart").click(function(){

        var itemExist = false;
        
        for (let i = 0; i < cartList.length; i++){
            if (cartList[i].product_id == GET_PARAM("product_id")){

                itemExist = true;

                cartList[i].quantity++;

            }
        }
        
        if (itemExist == false) {
            var cartItem = {
                product_id: GET_PARAM("product_id"),
                quantity: 1
            
            }
            cartList.push(cartItem);
            
        }



        sessionStorage.setItem("id_product", JSON.stringify(cartList));
        

    })

})
