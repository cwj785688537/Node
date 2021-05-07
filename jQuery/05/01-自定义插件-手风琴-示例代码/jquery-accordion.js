/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype

//在jQuery的原型链上给$添加方法
$.fn.accordion = function (obj) {
  //给li绑定鼠标移入事件
  var lis = this.find('li')
  //因为是动态的，所以要获取li的最大值和最小值
  //要根据li的最小值来求当前鼠标移入li的最大值
  var minWidth = obj.minWidth || 100
  //最大宽度 = DIV的宽度 - 最小宽度 * li-1
  var maxWidth = this.width() - minWidth * (lis.length - 1)

  //给li一个初始化的宽度
  var avgWidth = this.width() / lis.length
  lis.css({ width: avgWidth })

  //给li添加颜色,遍历Li
  lis.each(function (index, element) {
    $(element).css({ backgroundColor: obj.colors[index] })
  })


  //让鼠标移入的li变大，其他的li变小
  lis.on('mouseenter', function () {
    // console.log(1);

    $(this).stop(true).animate({ width: maxWidth }).siblings().stop(true).animate({ width: minWidth })
  })

  //鼠标移出，让所有li的宽度平均分配
  this.on('mouseleave', function () {
    lis.stop(true).animate({ width: avgWidth })
  })
}