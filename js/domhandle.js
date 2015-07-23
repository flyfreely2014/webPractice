$(document).ready(function() {
    //定义初始坐标
    var x = 10;
    var y = 20;
    $(".tooltip").mouseover(function(e) {
        //将元素title值赋给新属性然后清空title值
        this.myTitle = this.title;
        this.title = "";
        //创建一个div并添加到DOM树
        var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
        $("body").append(tooltip);
        //设定div的相关属性
        $("#tooltip").css({
            "position":"absolute",
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px",
            "background":"green",
            "height":"25px",
            "width":"160px",
            "line-height":"25px"
        }).show('fast');
    }).mouseout(function() {
        //鼠标移出时清除div
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function(e) {
        //div随鼠标移动
        $("#tooltip").css({
            "position":"absolute",
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px",
            "background":"green",
            "height":"25px",
            "width":"160px",
            "line-height":"25px"
        })
    });
});

