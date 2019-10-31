

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