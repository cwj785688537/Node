//在jQuery的原型链上给他添加方法
$.fn.accordion = function(obj){
    //获取li
    var lis = this.find('li')
    

    //获取鼠标移入时其他li的宽度
    var minWidth = obj.minWidth || 100
    //根据最小宽度获取当前li的最大宽度
    //最大宽度 = div的宽度 - 最小宽度 * 个数
    var maxWidth = this.width() - minWidth * (lis.length - 1)

    //给li一个初始化宽度
    // div的宽度 / li的个数
    var avgWidth = this.width() / lis.length
    lis.css({width:avgWidth})

    //给li添加颜色，遍历li
    lis.each(function(index,element){
        $(element).css({backgroundColor:obj.colors[index]})
    })

    //给li设置鼠标移入事件
    lis.on('mouseenter',function(){
        $(this).stop(true).animate({width:maxWidth}).siblings().stop(true).animate({width:minWidth})
    })

    //给li设置鼠标移出事件
    this.on('mouseleave',function(){
        $(this).find('li').stop(true).animate({width:avgWidth})
    })
}