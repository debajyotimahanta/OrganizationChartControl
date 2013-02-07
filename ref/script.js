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

        console.log("isiden");

        var index=$(this).index()*1;
        console.log((219-(87*index)));
        $(".box").width("85px");
        $(".box").height("332px");
        //need to replace 410 and 173
        $("#slide").stop().animate({"left":(400-245-(87*index))});
        $($(".box")[index]).width($($(".box")[index-1]).width()*5);
        $($(".box")[index]).height($($(".box")[index-1]).height()*1.5);
        $(this).css("margin-top","-5px");
        $(this).html('');



    });
    $(".box").mouseenter(function(){
     
        console.log("focus");
        //$(".box").css("background-color",$(this).css("background-color"));
        $(this).css("background-color", "#f9f9f9");

        $(this).css("margin-top","10px");
        $(this).css("border-right","solid");
        $(this).prev().css("border-right","solid");


    
    }).mouseleave(function(){
        $(".box").css("background-color", "#e7e7e7");

        $(".box").css("margin-top","0px");
        $(".box").css("border-right","none");

    })

    

    $(".box1").click(function(){

        console.log("inside");
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

    $("#next").click(function(event) {
        console.log("in");
        ScrollUp();
    });

    $("#next").click(function(event) {
        ScrollDown();
    });


    function ScrollUp(){

        var leftVal = $("#slide").css("left").replace(/[^-\d\.]/g, '');
        leftVal = parseInt(leftVal);
        console.log(leftVal )
            $("#slide").stop().animate({"left":leftVal + 177  + 'px'}, { "duration": 400, "easing": "linear" });
            if (mouseisdown)
                setTimeout(ScrollUp, 400);


    }

    function ScrollDown(){

        var leftVal = $("#slide").css("left").replace(/[^-\d\.]/g, '');
        leftVal = parseInt(leftVal);
        console.log(leftVal )
        $("#slide").stop().animate({"left":leftVal - 177  + 'px'}, { "duration": 400, "easing": "linear" });
        if (mouseisdown)
            setTimeout(ScrollDown, 400);


    }
})