// 动态展示所有任务项的个数和已经完成的任务项的个数
function showListNum() {
    let totalLi = document.querySelectorAll('#todo-main>li').length
    let doneTotalNum = document.querySelectorAll('#todo-main>li>label>input:checked').length
    // let doneTotalNum = document.getElementsByTagName('todo-main>li>label>input:checked').length
    let doneNum = document.getElementById('doneNum')
    let totalNum = document.getElementById('totalNum')
    doneNum.innerText = doneTotalNum
    totalNum.innerText = totalLi
    console.log(doneTotalNum);
}

function hide() {
    let todoMain = document.getElementById('todo-main')
    let todoFooter = document.getElementById('todo-footer')
    
    let todoWrap = document.getElementById('todo-wrap')
    console.log(todoWrap);
    todoMain.style.display = 'none'
    todoFooter.style.display = 'none'
    let h1 = document.createElement('h1')
    h1.innerHTML = '恭喜你，没有任务了！'
    todoWrap.appendChild(h1)
}

function show() {
    let todoMain = document.getElementById('todo-main')
    let todoFooter = document.getElementById('todo-footer')
    
    let todoWrap = document.getElementById('todo-wrap')
    // console.log(todoWrap);
    todoMain.style.display = 'block'
    todoFooter.style.display = 'block'
    // let h1 = document.querySelector('#todo-wrap h1')
    // console.log(h1);
    // h1.style.display = 'none'
}

function changeAllCheckbox() {
    // 获取所有任务项的个数
    let allItems = document.querySelectorAll('#todo-main>li>label>input').length
    // 获取所有选中的任务项的个数
    let allCheckedItems = document.querySelectorAll('#todo-main>li>label>input:checked').length
    let todoFooter = document.querySelector('#todo-footer input')
    console.log(allItems,allCheckedItems);
    // 通过判断这两个数是否相同来决定是否将全选选中
    if(allItems === allCheckedItems){
        todoFooter.checked = true
    }else{
        todoFooter.checked = false
    }
}