$(document).ready(function(){

    $(".nav-button").click(function(){
        
        if ($("header nav ul").css("display") == "none"){
            $("header nav ul").removeClass("d-none");
        }
        else{
            $("header nav ul").addClass("d-none");
        }

    })


})