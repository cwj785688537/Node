console.log('app');

// 如果要让module执行，就在入口函数引入module1
// module1 没有导出的时候，接收到的是一个空对象
// module1 导出之后，接收到一个对象，对象里面是导出的数据
const moudl1 = require('./modul1')
console.log(moudl1);


let {a,b} = moudl1

console.log(a);
console.log(b);