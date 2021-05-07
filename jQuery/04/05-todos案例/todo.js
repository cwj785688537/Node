//后台传入一个数据
var todoList = [
    {
        id: 1,
        todo: '吃饭',
        isDone: true
    },
    {
        id: 2,
        todo: '睡觉',
        isDone: true
    },
    {
        id: 3,
        todo: '敲代码',
        isDone: false
    },
]



//判断数据中是否有值
 if (todoList.length !== 0) {
     //将数据传入todo-main中
var todoArr = todoList.map(function (item, index) {

    //判断isDone是否为true,如果为true，则给让复选框打钩并且给span添加类名
    if (item.isDone) {
        return '<li>\
    <label>\
      <input type="checkbox" checked/>\
      <span class="done">'+ item.todo + '</span>\
    </label>\
    <button class="btn btn-danger">删除</button>\
  </li>'
    } else {
        return '<li>\
    <label>\
      <input type="checkbox" />\
      <span>'+ item.todo + '</span>\
    </label>\
    <button class="btn btn-danger">删除</button>\
  </li>'
    }

})
}else{
    $('.todo-main,.todo-footer').hide()
        $('.todo-wrap').append('<h1>恭喜你，没有任务了！</h1>')
}
//将获取到的数据加入到todo-main中
$('.todo-main').html(todoArr.join(''))
allNum()

//绑定键盘按下事件，当点击回车的时候将输入的数据放入todo-main中
$('.todo-header input').on('keyup', function (e) {
    //判断按下的是否是回车
    if (e.keyCode === 13) {
        //根据输入的值创建li，将输入的值放入span中
        //获取输入的值并将两端的空格删除
        //代码的健壮性处理
        var value = $('.todo-header input').val().trim()
        //如果if中只输入一个值，可以不用花括号，把值写在if后面
        //如果没有输入值则将空格清空并直接退出函数
        if (!value) {
            $('.todo-header input').val('')
            return
        }

        //输入完之后清空内容
        $('.todo-header input').val('')

        //将内容加入到todo-main中
        $('.todo-main').append('<li>\
        <label>\
          <input type="checkbox" id="qqq"/>\
          <span>'+ value + '</span>\
        </label>\
        <button class="btn btn-danger">删除</button>\
      </li>')

        //将todo-main和todo-footer展示出来
        show()


    }

    Checked()

    allNum()
})

// //点击按钮的时候让按钮加上类名
// //因为要新增li，所以要使用事件委托
$('.todo-main').on('click', 'li>label>input', function () {
    //判断复选框是否被选中
    // var isChecked = $('.todo-main>li>lable>input').prop('checked')
    var isChecked = $(this).prop('checked')
    console.log($(this))
    console.log($('#qqq'))
    // console.log(this);
    // console.log($(this).get(0).tagName);
    // console.log($('.todo-main>li>lable>input'));
    // console.log(isChecked);
    //如果复选框被选中则添加样式，否则移除样式
    if (isChecked) {
        $(this).next().addClass('done')
    } else {
        $(this).next().removeClass('done')
    }
    // 如果所有复选框被选中，让全选框也被选中
    Checked()
    allNum()
})

//如果全选框选中，让所有复选框也选中
$('.todo-footer input').on('click', function () {
    //获取全选框是否被选中
    var allChecked = $(this).prop('checked')
    //如果全选框被选中，让所有复选框打钩并添加样式，否则就移除
    if (allChecked) {
        $('.todo-main>li>label>input').prop('checked', true)
        $('.todo-main>li>label>input').next().addClass('done')
    } else {
        $('.todo-main>li>label>input').prop('checked', false)
        $('.todo-main>li>label>input').next().removeClass('done')
    }
    allNum()
})

//点击删除按钮的时候，删除li
//因为要添加li，所以使用事件委托
$('.todo-main').on('click', 'li>button', function () {
    $(this).parent().remove()
    //删除后要判断复选框是否全部选中
    Checked()
    //当所有复选框删完之后要隐藏todo-main和todo-footer
    isShow()

    allNum()
})

//清除已完成的任务
$('.todo-footer button.btn-danger').on('click', function () {
    //点击的时候将所有选中的复选框的父元素li全部删除
    $('.todo-main li input:checked').parent().parent().remove()

    //判断是否需要展示h1标签
    isShow()

    //改变文字
    allNum()
})
