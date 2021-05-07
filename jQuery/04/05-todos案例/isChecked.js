function Checked() {
    //判断复选框的长度和所有Li的长度是否相等
    var allLength = $('.todo-main li').length
    var checkLength = $('.todo-main>li>label>input:checked').length
    console.log(allLength === checkLength);
    if (allLength === checkLength) {
        //如果复选框的长度和所有Li的长度相等，将全选框打钩
        $('.todo-footer input').prop('checked', true)
    } else {
        $('.todo-footer input').prop('checked', false)
    }
}

//判断是否需要展示h1标签
function isShow() {
    //获取ul中li的长度
    var ulLength = $('.todo-main').children().length
    //如果小于0就将todo-main和todo-footer隐藏
    if (ulLength <= 0) {
        hide()
    } else {
        show()
    }
}

function hide() {
    $('.todo-main,.todo-footer').hide()
    $('.todo-wrap').append('<h1>恭喜你，没有任务了！</h1>')
}

function show() {
    $('.todo-main,.todo-footer').show()
    $('h1').remove()
}

//当内容改变时，改变文字内容
function allNum(){
    // 获取li的个数
    var doneNum = $('.todo-main li input:checked').length
    var totleNum = $('.todo-main li').length

    $('#doneNum').text(doneNum)
    $('#totleNum').text(totleNum)
}