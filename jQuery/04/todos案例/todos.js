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

//将后台的数据传入todo-main中
//使用map返回一个对象，再将对象放入todo-main中
if (todoList.length !== 0) {
    var todoData = todoList.map(function (item, index) {

        //如果数据中有值，则用字符串拼接放入todo-main中
        //判断isDone是否为true，如果该为true，则让复选框打钩并且添加done样式
        if (item.isDone) {
            return ('<li>\
        <label>\
          <input type="checkbox" checked/>\
          <span class="done">'+ item.todo + '</span>\
        </label>\
        <button class="btn btn-danger">删除</button>\
      </li>')
        } else {
            return ('<li>\
        <label>\
          <input type="checkbox" />\
          <span>'+ item.todo + '</span>\
        </label>\
        <button class="btn btn-danger">删除</button>\
      </li>')
        }

    })
} else {
    //判断传入的数据是否有值，如果没有则将todo-main和todo-footer隐藏
    $('.todo-main,.todo-footer').hide()
    $('.todo-wrap').append('<h1>恭喜你，没有任务了！</h1>')
}

$('.todo-main').html(todoData)

//绑定键盘按下事件，当按下回车的时候将输入的内容放入todo-main中
$('.todo-header input').on('keyup', function (e) {
    //event事件中可以获取到keyCode
    if (e.keyCode === 13) {
        //获取输入的内容
        var val = $(this).val().trim()
        //如果没有输入，则直接退出函数
        if (!val) {
            $(this).val('')
            return
        }

        //输入完之后清空内容
        $('.todo-header input').val('')

        //将输入的内容放进todo-main中
        $('.todo-main').append('<li>\
        <label>\
          <input type="checkbox" />\
          <span>'+ val + '</span>\
        </label>\
        <button class="btn btn-danger">删除</button>\
      </li>')

        //将todo-main和todo-footer展示出来
        show()
    }
})
