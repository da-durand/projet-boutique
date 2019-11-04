$(document).ready(function () {

    var totals = [];

    function renderCart(i) {

        var price = catalog[cart[i].productId].price
        var quantity = cart[i].quantity
        var total = price * quantity

        $(".cart-container").append("<div class='row article'>");
        $(".article:eq(" + i + ")").append("<div class='article-header col-12 col-md-6'>");
        $(".article:eq(" + i + ") .article-header").append("<h3>" + catalog[cart[i].productId].name + "</h3>");// ICI

        $(".article:eq(" + i + ") .article-header").append('<img src=' + catalog[cart[i].productId].thumb + ' alt="" srcset="" class="d-none d-md-block mw-100">');

        $(".article:eq(" + i + ")").append('<div class="col-12 col-md-6 d-flex align-items-center details">');
        $(".article:eq(" + i + ") .details").append('<div class="row d-flex align-items-center justify-content-between w-100 price-u">');
        $(".article:eq(" + i + ") .price-u").append('<div class="col-4 col-md-4"> <p class="price-unite" id="price-' + i + '">' + catalog[cart[i].productId].price + '</p><p>€</p> </div>');
        $(".article:eq(" + i + ") .details").append('<div class="col-4 col-md-4 quantity-stock">');
        $(".article:eq(" + i + ") .quantity-stock").append('<div class="row quantity-stock-container">');
        $(".article:eq(" + i + ") .quantity-stock-container").append('<div class="col-6 col-md-12"> <p class="d-md-none">Qt</p> <p class="d-none d-md-block">Quantité</p></div>');
        $(".article:eq(" + i + ") .quantity-stock").append('<div class="col-6 col-md-12 d-flex justify-content-center"> <button id="minus-' + i +'" class="sub">-</button> <p class="quantity" id="sum-' + i + '"> ' + cart[i].quantity + ' </p> <button id="sup-' + i + '" class="sup">+</button> </div>');// LA
        $(".article:eq(" + i + ") .details").append('<div class="col-4 col-md-4">  <p class="total-price" id="total-' + i + '">' + total + '</p><p>€</p> </div>');

        totals.push(total);

    };


    function renderTotal() {

        var ttc = 0;

        for (let i = 0; i < totals.length; i++){
            ttc += totals[i]
        }

        var htc = (ttc / 1.2).toFixed(2)

        $('.total-container').append('<div class="col-12 col-md-3 col-lg-2 cart-total-container">');
        $('.cart-total-container').append('<div class="row cart-total">');
        $('.cart-total').append(' <div class="col-6 col-md-12 cart-total-col">');
        $('.cart-total-col').append('<div class="row cart-total-row">');
        $('.cart-total-row').append('<div class="col-6 col-md-12"> <p>Total HTC</p> <p class="htc-price">' + htc + '</p> </div>');
        $('.cart-total').append('<div class="col-6 col-md-12" > <p>Total TTC</p> <p class="ttc-price">'+ ttc +'</p> </div> ');
        $('.cart-total').append('<div class="col-6 col-md-12"> <button>Payer</button> </div>');

    }


    // renderCart();
    
    for (let i = 0; i < cart.length; i++) {
        
        renderCart(i)
        
    }
    
    renderTotal();

    $(".sub").click(function(){
        var temp = $(this).attr("id")
        var indice = temp[temp.length-1]

        tempQuantity = parseInt($("#sum-"+indice).html());
        tempQuantity -= 1;
        $("#sum-"+indice).html(tempQuantity)
        
        var tempPrice = parseInt($("#price-"+indice).html());
        var tempSum = parseInt($("#sum-"+indice).html())

        $("#total-"+indice).html(tempPrice * tempSum);

        // console.log(tempPrice);
        
        
    })

    $(".sup").click(function(){
        var temp = $(this).attr("id")
        var indice = temp[temp.length-1]

        tempQuantity = parseInt($("#sum-"+indice).html());
        tempQuantity += 1;
        $("#sum-"+indice).html(tempQuantity)
        
        var tempPrice = parseInt($("#price-"+indice).html());
        var tempSum = parseInt($("#sum-"+indice).html())

        $("#total-"+indice).html(tempPrice * tempSum)

        // console.log(tempPrice);
        
        
    })


})
