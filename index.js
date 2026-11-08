var level = 2;
$("button").click(function(){
    $("button").hide();
    startAgain();
})

function fireworkUp(){
    if(level < 5){
        level++
        $("#level-" + level).prepend($("img"));
        $("img").fadeIn(200).fadeOut(200 , function(){
            fireworkUp();
        });
    }
    else if(level === 5){
        level++
        $("#level-" + level).prepend($("img"));
        $("img").attr("src" , "firework_burst_chaotic.png");
        $("img").fadeIn(200).fadeOut(200 , function(){
            fireworkUp();
        });
    } else{
        level++;
        $("#level-" + level).prepend($("img"));
        $("img").addClass("burst");
        $("img").attr("src" , "firework_chrysanthemum.png");
        $("img").fadeIn(200).fadeOut(200 , function(){
            $("img").attr("src" , "firework_willow.png");
            $("img").fadeIn(200).fadeOut(200 , function(){
                $("button").show();
                $("h1").hide();
                $("h2").hide();
                $("img").removeClass("burst");
                $("img").attr("src" , "rocket_firework.png");
                $("#level-2").prepend($("img"));
                $("img").show();
            });
        });
        $("h1").show();
        $("h2").show();
    }
}
function startAgain(){
    level = 2;
    $("img").attr("src" , "rocket_firework_lit.png")
    fireworkUp();
}
