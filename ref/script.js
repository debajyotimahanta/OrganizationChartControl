$(function(){


    var mouseisdown = false;

    $('#prev').mousedown(function(event) {
        mouseisdown = true;
        ScrollUp();
    }).mouseup(function(event) {
            mouseisdown = false;
        });

    $('#next').mousedown(function(event) {
        mouseisdown = true;
        ScrollDown();
    }).mouseup(function(event) {
            mouseisdown = false;
        });

    $(document).mousedown(function(event) {
    }).mouseup(function(event) {
            mouseisdown = false;
        });


    $(".box").click(function(){

        console.log("in");

        var index=$(this).text()*1;

        $(".box").width($(this).width());
        move=-170*(index-2);
        $("#slide").css('left',0+'px');
        $("#slide").css('left',move-50+'px');
        $(this).width($(this).width()*2);
        //$(".manager").css('left',move-50+'px');



    })
    $(".box").mouseenter(function(){

        console.log("focus");
        //$(".box").css("background-color",$(this).css("background-color"));
        $(this).css("background-color", "#e0ffff");
        $(this).css('z-index', '10').stop().animate({
            'height' : 200+'px',
            'width' : 200+'px',
            'left' : 10+'px',
            'top' : 10+'px'}, 210);
    }).mouseleave(function(){
            console.log("leave");
            $(".box").css("background-color","#d3d3d3");

        })

    $(".box1").click(function(){

        console.log("in");
        $(".box").height("132px");
        $(".box").width("167px");
        $(this).animate({"height":400,"width":400},
            {
                "duration":50,
                complete:function(){

                    ScrollDown();
                    ScrollDown();
                    ScrollDown();
                    ScrollDown();
                    ScrollDown();
                }
            });


    })

    function ScrollUp(){

        var leftVal = $("#slide").css("left").replace(/[^-\d\.]/g, '');
        leftVal = parseInt(leftVal);

            $("#slide").stop().animate({"left":leftVal + 177  + 'px'}, { "duration": 400, "easing": "linear" });
            if (mouseisdown)
                setTimeout(ScrollUp, 400);


    }

    function ScrollDown(){

        var leftVal = $("#slide").css("left").replace(/[^-\d\.]/g, '');
        leftVal = parseInt(leftVal);
        $("#slide").stop().animate({"left":leftVal - 177  + 'px'}, { "duration": 400, "easing": "linear" });
        if (mouseisdown)
            setTimeout(ScrollDown, 400);


    }
})