$(function() {
    $(".required").focus(function() {
        $(this).addClass("focus");
        $parent = $(this).parent();
        $parent.find(".tipsOnErr").remove();
    }).blur(function() {
        $(this).removeClass("focus");
        $parent = $(this).parent();
        if ($(this).is('#username')) {
            if (this.value == "" || this.value.length < 6) {
                var errMsg = "×请输入大于六个字符的用户名";
                $parent.find(".tipsOnErr").remove();
                $parent.append('<span class="tipsOnErr">'+errMsg+'</span>');
                //alert(errMsg);
            }else{
                var okMsg = "√";
                $parent.append('<span class="tipsOnOk">'+okMsg+'</span>');
            }
        }else{
            if (this.value == "" ||(this.value !="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ) {
                var errMsg = "×请输入正确的email地址";
                $parent.find(".tipsOnErr").remove();
                $parent.append('<span class="tipsOnErr">'+errMsg+'</span>');
            }else{
                var okMsg = "√";
                $parent.append('<span class="tipsOnOk">'+okMsg+'</span>');
            }
        }
    });
    $("#submit").click(function() {
        $(".required:input").trigger('blur');
        var err = $(".tipsOnErr").length;
        if (err>0) {
            alert("请不要试图提交非法数据");
            return false;
        }else{
            $(".tipsOnOk").remove();
            alert("密码已发送至邮箱，请查收。");
        }
    });
    var $comment = $("#comment");
    $("#bigger").click(function() {
        if (!$comment.is(":animated")) {
            if ($comment.height() < 300) {
                $comment.animate({
                    height: "+=50"
                }, 600);
            } else {
                alert("已经最大了！");
                return false;
            }
        }
    });
    $("#smaller").click(function() {
        if (!$comment.is(":animated")) {
            if ($comment.height() > 50) {
                $comment.animate({
                    height: "-=50"
                }, 600);
            } else {
                alert("不能再小了！");
                return false;
            }
        }
    });
    $("#up").click(function() {
        if (!$comment.is(":animated")) {
            $comment.animate({
                scrollTop: "-=50"
            }, 600);
        };
    });
    $("#down").click(function() {
        if (!$comment.is(":animated")) {
            $comment.animate({
                scrollTop: "+=50"
            }, 600)
        }
    });
    $("#selectAll").click(function() {
        $("[name=items]:checkbox").each(function() {
            this.checked = true;
        });
    });
    $("#selectRev").click(function() {
        $('[name=items]:checkbox').each(function() {
            this.checked = !this.checked;
        });
    });
    $("#submitCheck").click(function() {
        var str = "你选中的是：\r\n";
        $('[name=items]:checkbox:checked').each(function() {
            str += $(this).val() + "\r\n";
        });
        alert(str);
    });
});
