
var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};


$(document).ready(function () {
console.log("plop");

    var page = GET_PARAM("page");


    var nbpage = Math.ceil(catalog.length / 12);

    console.log(nbpage);

    if (page > 1){
        $(".previous-page").attr("href", "./catalog.html?page=" + (page-1))
    }

    $(".next-page").attr("href", "./catalog.html?page=" + (page+1))
    
    for (let i = 0; i < nbpage ; i ++){
        
        $(".nav-buttons").append('<li class="page-item"><a class="page-link" href="./catalog.html?page=' + (i+1) + '">'+ (i+1) + '</a></li>')
        
        
    }

    // Integration produit catalogue
    var start = 0
    var end = 12
    if(page != null && page != 1) {
        start = 12 * (parseInt(page) - 1)
        end = start + 12
        
    }
    console.log(start, end);
    
    var subcatalog = catalog.slice(start, end)
    console.log(subcatalog);
    


    for (let i = 0; i < subcatalog.length; i++) {

        // genération du catalogue
            $(".card-container").append('<div class="cards-' + i + ' col-12 col-md-6 col-lg-4">');
            $('.cards-' + i).append('<div class="card-body row">');
            $(".cards-" + i + " .card-body").append('<div class="col-12"> <a href="./product.html?product_id=' + i + '" class="text-decoration-none text-light"> </div>');
            $(".cards-" + i + " .card-body a").append('<img src="' + subcatalog[i].thumb + '" alt="" class="mw-100"></img>');
            $(".cards-" + i + " .card-body a").append('<h4>' + subcatalog[i].name + '</h4>');
            $(".cards-" + i + " .card-body").append('<div class="col-6">' + subcatalog[i].price + ' €</div>');
            $(".cards-" + i + " .card-body").append('<div class="col-6">' + subcatalog[i].quantity + ' en stock</div>');
            $(".cards-" + i + " .card-body").append('<div class="col-12"> <button> Ajouter au panier </button> </div>');

    }



})