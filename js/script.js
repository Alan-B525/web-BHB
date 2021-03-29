$(window).on("load",function(){
    window.setTimeout(()=>{
        console.log("Console.log");
        $("#precarga").css({"display":"none"});
        $("#load").css({"opacity": "1"});
        $("body").css({"overflow-y": "scroll"})
    }, 1500);
});
