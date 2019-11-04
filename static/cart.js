$(document).ready(function () {


    $(".cart-container").append("<div class='row article'>");
    $(".article").append("<div class='article-header col-12 col-md-6'>");
    $(".article-header").append("<h3>Titre</h3>");
    $(".article-header").append('<img src="./static/img/image.png" alt="" srcset="" class="d-none d-md-block mw-100">');
    $(".article").append('<div class="col-12 col-md-6 d-flex align-items-center details">');
    $(".details").append('<div class="row d-flex align-items-center justify-content-between w-100 price-u">');
    $(".price-u").append('<div class="col-4 col-md-4"> <p class="price-unite"> Prix unitaire </p> </div>');

    $(".details").append('<div class="col-4 col-md-4 quantity-stock">');
    $(".quantity-stock").append('<div class="row quantity-stock-container">');


    

    




})

    // < div class="row article" >
    //     <div class="col-12 col-md-6">
    //         <h3>Red Dead Redemption 2</h3>
    //         <img src="./static/img/image.png" alt="" srcset="" class="d-none d-md-block mw-100">
    //                         </div>
    //         <div class="col-12 col-md-6 d-flex align-items-center">
    //             <div class="row d-flex align-items-center justify-content-between w-100">
    //                 <div class="col-4 col-md-4">
    //                     <p class="price-unite"></p>
    //                 </div>
    //                 <div class="col-4 col-md-4">
    //                     <div class="row">
    //                         <div class="col-6 col-md-12">
    //                             <p class="d-md-none">Qt</p>
    //                             <p class="d-none d-md-block">Quantité</p>
    //                         </div>
    //                         <div class="col-6 col-md-12 d-flex justify-content-center">
    //                             <button>-</button>
    //                             <p class="quantity"></p>
    //                             <button>+</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-4 col-md-4">
    //                     <p class="total-price"></p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>