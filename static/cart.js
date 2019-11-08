$(document).ready(function () {

    var totals = [];

    var cart = JSON.parse(sessionStorage.getItem("cart"));
    console.log(cart);


    function renderCart(i) {

        var price = catalog[cart[i].product_id].price;
        var quantity = cart[i].quantity;
        var total = price * quantity;

        $(".cart-container").append("<div class='row article' id='art-" + cart[i].product_id + "'>");
        $(".article:eq(" + i + ")").append("<div class='article-header col-12 col-md-6'>");
        $(".article:eq(" + i + ") .article-header").append("<h3>" + catalog[cart[i].product_id].name + "</h3>");// ICI

        $(".article:eq(" + i + ") .article-header").append('<img src=' + catalog[cart[i].product_id].thumb + ' alt="" srcset="" class="d-none d-md-block mw-100">');

        $(".article:eq(" + i + ")").append('<div class="col-12 col-md-6 d-flex align-items-center details">');
        $(".article:eq(" + i + ") .details").append("<button class='delete' id='del-" + cart[i].product_id + "'>Supprimer</button>");
        $(".article:eq(" + i + ") .details").append('<div class="row d-flex align-items-center justify-content-between w-100 price-u">');
        $(".article:eq(" + i + ") .price-u").append('<div class="col-4 col-md-4"> <p class="price-unite" id="price-' + cart[i].product_id + '">' + catalog[cart[i].product_id].price + '</p><p>€</p> </div>');
        $(".article:eq(" + i + ") .details").append('<div class="col-4 col-md-4 quantity-stock">');
        $(".article:eq(" + i + ") .quantity-stock").append('<div class="row quantity-stock-container">');
        $(".article:eq(" + i + ") .quantity-stock-container").append('<div class="col-6 col-md-12"> <p class="d-md-none">Qt</p> <p class="d-none d-md-block">Quantité</p></div>');
        $(".article:eq(" + i + ") .quantity-stock").append('<div class="col-6 col-md-12 d-flex justify-content-center"> <button id="minus-' + cart[i].product_id + '" class="sub">-</button> <p class="quantity" id="sum-' + cart[i].product_id + '"> ' + cart[i].quantity + ' </p> <button id="sup-' + cart[i].product_id + '" class="sup">+</button> </div>');// LA
        $(".article:eq(" + i + ") .details").append('<div class="col-4 col-md-4">  <p class="total-price" id="total-' + cart[i].product_id + '">' + total + '</p><p>€</p> </div>');

        totals.push(total);



        $(".sup").click(function () {

            var btn = $(this).attr("id");
            var sum = btn.replace("sup", "sum");

            var tempQuantity = parseInt($("#" + sum).html());

            if (tempQuantity < catalog[cart[i].product_id].quantity) {

                var price = btn.replace("sup", "price");
                var total = btn.replace("sup", "total");

                tempQuantity += 1;
                $("#" + sum).html(tempQuantity);

                var priceRender = parseInt($("#" + price).html());
                var sumRender = parseInt($("#" + sum).html());

                $("#" + total).html(priceRender * sumRender);

                renderTotal();

            }

        })

    };


    function renderTotal() {

        var ttc = 0;

        $(".total-price").each(function () {
            ttc += parseFloat($(this).html());
        })

        var htc = (ttc / 1.2).toFixed(2)

        $('.total-container').html('<div class="col-12 col-md-3 col-lg-2 cart-total-container">');
        $('.cart-total-container').append('<div class="row cart-total">');
        $('.cart-total').append(' <div class="col-6 col-md-12 cart-total-col">');
        $('.cart-total-col').append('<div class="row cart-total-row">');
        $('.cart-total-row').append('<div class="col-6 col-md-12"> <p>Total HTC</p> <p class="htc-price">' + htc + '</p> </div>');
        $('.cart-total').append('<div class="col-6 col-md-12" > <p>Total TTC</p> <p class="ttc-price">' + ttc + '</p> </div> ');
        $('.cart-total').append('<div class="col-6 col-md-12"> <button>Payer</button> </div>');

    }

    for (let i = 0; i < cart.length; i++) {

        renderCart(i);

    }

    renderTotal();

    $(".sub").click(function () {

        var btn = $(this).attr("id");
        var sum = btn.replace("minus", "sum");

        tempQuantity = parseInt($("#" + sum).html());

        if (tempQuantity != 0) {

            var price = btn.replace("minus", "price");
            var total = btn.replace("minus", "total");

            tempQuantity -= 1;
            $("#" + sum).html(tempQuantity);

            var priceRender = parseInt($("#" + price).html());
            var sumRender = parseInt($("#" + sum).html());

            $("#" + total).html(priceRender * sumRender);

            renderTotal();

        }

    })

    
    $(".delete").click(function () {
        var btn = $(this).attr("id");
        var article = btn.replace("del", "art");
        $("#" + article).remove();
        
        renderTotal();
        


        
        var idItem = parseInt(btn.replace("del-", ""));
        
        
        for (let i = 0; i < cart.length; i++) {
            
            if(cart[i].product_id == idItem){
                console.log("trololol");
                
                cart.splice(i, 1)
                
                sessionStorage.setItem("cart", JSON.stringify(cart))      
            }     
        }
        
        





        console.log(cart);


    })
})
