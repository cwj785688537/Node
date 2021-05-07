function show(){
    $('.todo-main,.todo-footer').show()
    //将创建出来的h1删除
    $('h1').remove()
}

function hide(){
    $('.todo-main,.todo-footer').hide()
    $('.todo-wrap').append('<h1>恭喜你，没有任务了！</h1>')
}