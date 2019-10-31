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
        $(".card-container").append('<div class="cards-'+i+' col-12 col-md-6 col-lg-4">')
        $('.cards'+i).append('<div class="card-body row">')
        $(".cards"+i+" .card-body").append('<div class="col-12"> <a href="./product.html" class="text-decoration-none text-light"> </div>')
        $(".cards"+i+" .card-body a").append('<img src="'+ catalog[0].thumb +'" alt="" class="mw-100"></img>')
        $(".cards"+i+" .card-body a").append('<h4>'+ catalog[0].name +'</h4>')
        $(".cards"+i+" .card-body").append('<div class="col-6">' + catalog[0].price + ' €</div>')
        $(".cards"+i+" .card-body").append('<div class="col-6">' + catalog[0].quantity + ' en stock</div>')
        $(".cards"+i+" .card-body").append('<div class="col-12"> <button> Ajouter au panier </button> </div>')
        console.log('test');
        
    }





    

})