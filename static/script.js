var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};


$(document).ready(function(){

    // Menu nav bar
    $(".nav-button").click(function(){
        
        if ($("header nav ul").css("display") == "none"){
            $("header nav ul").removeClass("d-none");
        }
        else{
            $("header nav ul").addClass("d-none");
        }

    })
    // Fin menu nav bar
    

    // Integration produit catalogue

    for (let i = 0; i < catalog.length ; i++){

        // genération du catalogue
        $(".card-container").append('<div class="cards-'+i+' col-12 col-md-6 col-lg-4">');
        $('.cards-'+i).append('<div class="card-body row">');
        $(".cards-"+i+" .card-body").append('<div class="col-12"> <a href="./product.html?product_id='+i+'" class="text-decoration-none text-light"> </div>');
        $(".cards-"+i+" .card-body a").append('<img src="'+ catalog[i].thumb +'" alt="" class="mw-100"></img>');
        $(".cards-"+i+" .card-body a").append('<h4>'+ catalog[i].name +'</h4>');
        $(".cards-"+i+" .card-body").append('<div class="col-6">' + catalog[i].price + ' €</div>');
        $(".cards-"+i+" .card-body").append('<div class="col-6">' + catalog[i].quantity + ' en stock</div>');
        $(".cards-"+i+" .card-body").append('<div class="col-12"> <button> Ajouter au panier </button> </div>');
        
    }

// Carousel
    for (let i = 0; i < 3 ; i++){

        if (i == 0){
            $(".carousel-top").append('<div class="carousel-item active">');
        }
        else{
            $(".carousel-top").append('<div class="carousel-item">');
        }
        $(".carousel-top .carousel-item:eq("+i+")").append('<a href="./product.html?product_id='+i+'"></a>');
        $(".carousel-top .carousel-item:eq("+i+") a").append('<img src="' + catalog[i].thumb + '" class="d-block w-100" alt="...">')
        $(".carousel-top .carousel-item:eq("+i+") a").append('<p class="price-game mb-5 text-decoration-none text-warning">'+ catalog[i].price + ' €</p>')
        
    }

    // generation product




    

})