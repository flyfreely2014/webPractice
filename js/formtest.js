$(function() {
    $("#username,#passwd,#msg").focus(function() {
        $(this).addClass("focus");
    }).blur(function() {
        $(this).removeClass("focus");
    });
    var $comment = $("#comment");
    $("#bigger").click(function() {
        if (!$comment.is(":animated")) {
            if ($comment.height()<300)
                {
                    $comment.animate({height:"+=50"},600);
                }else{
                    alert("已经最大了！");
                    return false;
                }
            }
    });
    $("#smaller").click(function() {
        if (!$comment.is(":animated")) {
            if ($comment.height()>50)
                {
                    $comment.animate({height:"-=50"},600);
                }else{
                    alert("不能再小了！");
                    return false;
                }
            }
    });
    $("#up").click(function() {
        if (!$comment.is(":animated")) {
            $comment.animate({scrollTop:"-=50"},600);
        };
    });
    $("#down").click(function() {
        if(!$comment.is(":animated")) {
            $comment.animate({scrollTop:"+=50"},600)
        }
    });
    $("#all").click(function() {
        if (this.checked) {
            $('[name=items]:checkbox').attr("checked", true);
        }else{
            $('[name=items]:checkbox').attr("checked", false);
        }
    })
});
