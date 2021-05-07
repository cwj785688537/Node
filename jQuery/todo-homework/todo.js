// 主要定义todos案例中的业务逻辑
var todolist = [
    {
        id: 1,
        todoName: '123',
        isDone: true,
    },
    {
        id: 2,
        todoName: '456',
        isDone: false,
    },
]

let todoMain = document.getElementById('todo-main')

// 判断传入的数据中是否为空，如果不为空则展示todo-main和todo-footer,如果没有数据就不展示
if (todolist.length) {
    //   1. 将数据渲染到页面上
    //  根据数据，动态的创建html字符串
    //  遍历数组，根据数组的个数，动态的创建多个字符串

    let htmlArr = todolist.map(function (item) {
        // 如果item.isDone的值为true，就给input添加checked，如果没有就不加
        if (item.isDone) {
            return ('<li><label><input type="checkbox" checked/><span class="done">' +
                item.todoName +
                '</span></label><button class="btn btn-danger">删除</button></li>')
        } else {
            return ('<li><label><input type="checkbox" /><span>' +
                item.todoName +
                '</span></label><button class="btn btn-danger">删除</button></li>')
        }
    })
    // 将拼接好的html字符串添加到todo-main中
    todoMain.innerHTML = htmlArr.join('')
    showListNum()
} else {
    // 如果没有数据就不展示，并提示一句话
    hide()
}

// 2.实现添加任务的逻辑
// 给input注册键盘抬起事件
let todoHeder = document.getElementsByClassName('todo-header')
// let input = todoHeder.input
let input = document.querySelector('.todo-header input')
console.log(input);
input.onkeyup = function (e) {
    if (e.keyCode === 13) {
        // 如果按下回车就根据输入的内容动态的创建Li的字符串，然后添加到todo-main中
        let value = input.value.trim()
        // console.log(1);
        // 如果输入框为空则退出函数
        if (!value) {
            return
        }

        // 清空添加任务的表单
        // console.log(value);
        input.value = ''
        let li = document.createElement('li')
        li.innerHTML = '<label><input type="checkbox" /><span >' +
            value +
            '</span></label><button class="btn btn-danger">删除</button>'
        // let str = '<li><label><input type="checkbox" /><span >' +
        // value +
        // '</span></label><button class="btn btn-danger">删除</button></li>'

        todoMain.appendChild(li)
        // 将h1删除并将之前隐藏的显示
        show()

        changeAllCheckbox()
        showListNum()
    }
}

// 更新任务项的状态
todoMain.onclick = function () {
    // 获取input checked的状态,然后给span添加或删除样式
    let input = document.querySelectorAll('#todo-main li label input')
    input.forEach(function (item) {
        if (item.checked) {
            item.nextElementSibling.classList.add('done')
        } else {
            item.nextElementSibling.classList.remove('done')
        }
    })

    changeAllCheckbox()
    showListNum()
}

//  点击任务项的删除按钮，删除当前任务项

let deleteLi = document.querySelectorAll('#todo-main .btn-danger')
deleteLi.forEach(function (item) {
    item.onclick = function () {
        this.parentNode.remove()
    }

})


