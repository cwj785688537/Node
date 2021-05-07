//需要监听到主线程发送的数据之后，再开始计算
//this代表当前线程
this.onmessage = function (e) {
    //在event事件对象中 有一个data属性 就是接受的数据
    console.log(e.data);

    //开始计算
    var num = 0;
    for (var i = 0; i < e.data; i++) {
        num += Math.sqrt(i);
    }

    //计算完成之后 向主线程发送结果
    postMessage(num);

    //在分线程中关闭自身
    close();

}