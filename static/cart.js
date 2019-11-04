$(document).ready(function () {

    var totals = [];

    function renderCart(i) {

        var price = catalog[i].price
        var quantity = cart[i].quantity
        var total = price * quantity

        $(".cart-container").append("<div class='row article'>");
        $(".article:eq(" + i + ")").append("<div class='article-header col-12 col-md-6'>");
        $(".article:eq(" + i + ") .article-header").append("<h3>" + catalog[i].name + "</h3>");// ICI

        $(".article:eq(" + i + ") .article-header").append('<img src=' + catalog[i].thumb + ' alt="" srcset="" class="d-none d-md-block mw-100">');

        $(".article:eq(" + i + ")").append('<div class="col-12 col-md-6 d-flex align-items-center details">');
        $(".article:eq(" + i + ") .details").append('<div class="row d-flex align-items-center justify-content-between w-100 price-u">');
        $(".article:eq(" + i + ") .price-u").append('<div class="col-4 col-md-4"> <p class="price-unite"> ' + catalog[i].price + ' €</p> </div>');
        $(".article:eq(" + i + ") .details").append('<div class="col-4 col-md-4 quantity-stock">');
        $(".article:eq(" + i + ") .quantity-stock").append('<div class="row quantity-stock-container">');
        $(".article:eq(" + i + ") .quantity-stock-container").append('<div class="col-6 col-md-12"> <p class="d-md-none">Qt</p> <p class="d-none d-md-block">Quantité</p></div>');
        $(".article:eq(" + i + ") .quantity-stock").append('<div class="col-6 col-md-12 d-flex justify-content-center"> <button>-</button> <p class="quantity"> ' + cart[i].quantity + ' </p> <button>+</button> </div>');// LA
        $(".article:eq(" + i + ") .details").append('<div class="col-4 col-md-4">  <p class="total-price"> ' + total + ' €</p> </div>');

        totals.push(total);

        




    };

        console.log(totals);
        





    function renderTotal() {

        $('.total-container').append('<div class="col-12 col-md-3 col-lg-2 cart-total-container">');
        $('.cart-total-container').append('<div class="row cart-total">');
        $('.cart-total').append(' <div class="col-6 col-md-12 cart-total-col">');
        $('.cart-total-col').append('<div class="row cart-total-row">');
        $('.cart-total-row').append('<div class="col-6 col-md-12"> <p>Total HTC</p> <p class="htc-price">233.33€</p> </div>');
        $('.cart-total').append('<div class="col-6 col-md-12" > <p>Total TTC</p> <p class="ttc-price">280€</p> </div> ');
        $('.cart-total').append('<div class="col-6 col-md-12"> <button>Payer</button> </div>');

    }



    // renderCart();
    renderTotal();

    for (let i = 0; i < cart.length; i++) {

        renderCart(i)

    }


})
