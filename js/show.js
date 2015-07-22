$(document).ready(function() {
    //声明一个对象，获取列表中第六个元素之后最后一个元素之前的列表项
    var $category = $('ul li:gt(5):not(:last)');
    //为获取到的列表项添加类使之隐藏
    $category.addClass('hide');
    //为列表最后一项移除类使之文字按照默认方式显示
    $('ul li:last').removeClass('center');
    //声明对象，获取按钮
    var $toggleBtn = $("button");
    //当按钮被点击后执行函数
    $toggleBtn.click(function() {
        //如果上述获取的列表项可见
        if ($category.is(":visible")) {
            //为获取的列表项添加类使之隐藏
            $category.addClass('hide');
            //为列表最后一项移除类使之文字默认显示
            $('ul li:last').removeClass('center');
            //改变按钮文字
            $toggleBtn.text("显示全部品牌");
            //移除类使指定列表项文字颜色还原
            $('ul li a').filter(":contains('佳能'),:contains('尼康'),:contains('富士')").removeClass('red');
        }else{
        //移除类使之可见
        $category.removeClass('hide');
        //改变最后一列表项的文字显示方式
        $('ul li:last').addClass('center');
        //改变按钮文字
        $toggleBtn.text("精简显示品牌");
        //使指定列表项文字颜色改变
        $('ul li a').filter(":contains('佳能'),:contains('尼康'),:contains('富士')").addClass('red');
        };
        return false;
    });
});
