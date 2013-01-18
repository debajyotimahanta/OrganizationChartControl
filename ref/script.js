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
        $(".box").height("132px");
        $(".box").width("167px");
        $(this).animate({"height":400,"width":400},
            {
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
        if(leftVal < 200){
            $("#slide").stop().animate({"left":leftVal + 177  + 'px'}, { "duration": 400, "easing": "linear" });
            if (mouseisdown)
                setTimeout(ScrollUp, 400);

        }
    }

    function ScrollDown(){

        var leftVal = $("#slide").css("left").replace(/[^-\d\.]/g, '');
        leftVal = parseInt(leftVal);
        $("#slide").stop().animate({"left":leftVal - 177  + 'px'}, { "duration": 400, "easing": "linear" });
        if (mouseisdown)
            setTimeout(ScrollDown, 400);


    }
})