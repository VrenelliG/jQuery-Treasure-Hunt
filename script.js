$("#button").click(function(){
    $(".sword").show();
    $(".oldman").hide();
    $("#button").hide();
    $(".quote1").text("You got the Master Sword!");
    $(".start").show();
});
    
$(".start").dblclick(function(){
    $("h1").text("Click on the sword");
    $(".quote1").hide();
    $(".start").hide();
});

$(".sword").click(function(){
    $(".sword").slideUp();
    $(".congrats").text("Good job!");
    $(".quote1").hide();
    $("body").css("background-color", "black");
    $(".enemy").fadeIn();
    $(".guide").show();
    $(".start").hide();
    $("h1").hide();
});

$(".enemy").dblclick(function(){
    $(".enemy").fadeOut();
    $(".guide").text("Nice! You found two chests behind the Stalfos!");
    $(".guide2").show();
});

$(".guide2").hover(function(){
    $(".chest").show();
    $(".guide2").hide();
    $(".guide").hide();
    $(".congrats").text("Congratulations! Take your pick!");
    $(".congrats").show();
    $("body").css("background-image", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Of3iinTn_YD9srTrGXCaagMTjR-Whqg4c6gpEuuk49dHwRXY')");
});
    