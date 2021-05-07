// 1.引入mongoose

// (() => {
//     console.log(1);
// })()
const mongoose = require('mongoose')


    // 2.连接MongoDB数据库
    ; (async function () {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/test', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            console.log('服务器连接成功');

            let Schema = mongoose.Schema
            let dataScheam = new Schema({
                name: {
                    type: String,
                    required: true,
                    unique: true
                },
                age: {
                    type: Number,
                    required: true
                },
                sex: {
                    type: String,
                    default: '男'
                },
                date: {
                    type: Scheam.Types.Mixed,
                    default: Date.now()
                }
            })

            const usersModel = mongoose.model('test', dataScheam)

            usersModel.create({
                name: 'laoli',
                age: 18
            }, (err, data) => {
                console.log(err, data);
            })

        } catch (error) {

            console.log('服务器连接失败', error);
        }
    })()

    ; (() => {
        console.log(1);
    })()