/**
 * Created by Administrator on 2016/8/17.
 */


//连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');  //test 数据库名称


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

//新建一个Schema  / 数据库原型
var kittySchema = mongoose.Schema({
    name: String,
    fname: String,
    lname: String
});

/*
//将 Schema 转化成 model  //model 是个构建文档的类
var Kitten = mongoose.model('Kitten', kittySchema);

//新建一个文档？
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
*/


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema 的 原型方法，  每个Kitten 的实例都有这个方法
kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);


// 新建多个 对象（文档）
// var fluffy = new Kitten({ name: 'fluffy' });
// var fluffy2 = new Kitten({ name: 'fluffy2' });
// var fluffy3 = new Kitten({ name: 'fluffy3' });

//fluffy.speak(); // "Meow name is fluffy"

// fluffy2.save();
// fluffy3.save();




//保存fluffy文档 到 Kittens 集合
var fluffy = new Kitten({
    name:"chenweijie",
    fname:"chen",
    lname:"weijie"
})
/*
fluffy.save().then(function (product) {
    console.log(product);
});
console.log("保存成功")
*/
fluffy.save(function (err, product) {
    console.log(product);
});
console.log("保存成功");




//查询所有
 /*
Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})
   */


//根据正则筛选 查找 Kitten 集合的 文档
/*
Kitten.find({ name: /^fluff/ }, function (err, kittens) {  //kittens 文档数组  
    if (err) return console.error(err);
    console.log(kittens);
});
*/


//批量保存数据
/*
var obj = [
    {fname:"what3",lname:"hehe3"},
    {fname:"what4",lname:"hehe4"},
    {fname:"what5",lname:"hehe5"},
    {fname:"what2",lname:"hehe2"}
]

Kitten.create(obj,function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})
*/






//删除数据
/*
 var query = Kitten.remove({ fname: 'what3' });
query.exec();
console.log("删除数据")
*/



