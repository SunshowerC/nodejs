/**
 * Created by Administrator on 2016/8/17.
 */


var mongodb = require('mongodb');

//获取数据库服务
var server = new mongodb.Server("localhost", 27017, {auto_reconnect: true});

//获取对应名称的数据库

var db = new mongodb.Db("chen", server, {safe: true});//创建数据库对象

//打开数据库
db.open(function (err, db) {//连接数据库
    if (err)
        throw err;
    else {
        console.log("成功建立数据库连接");


        // 写入数据-在chen数据库下 集合 colle 下 插入文档
        /*     db.collection("colle", function (err,collection) {
         collection.insert({username:"盼盼",firstname:"李"}, function (err,docs) {
         console.log(docs);
         db.close();
         });
         });  */


        //访问集合 rncol
        /*        db.collection("rncol", function (err,collection) {
         collection.find({}).toArray(function(err,docs){
         if(err) throw  err;
         else{
         //获取集合内多个文档内容
         console.log(docs);
         db.close();
         }
         });

         });*/

/*
        db.collection("colle", function (err, collection) {
            if (err) throw err;
            else {
                // username:{$in:["啊","盼盼"]}  筛选出 username中包含‘啊’或者‘盼盼’的 文档。
                collection.find({username: {$in: ["盼啊", "盼盼"]}}).toArray(function (err, docs) {
                    if (err) throw  err;
                    else {
                        console.log(docs[0].firstname);
                        db.close();
                    }
                });
            }
        });
*/

        var docs=[
            {type:"food",price:11},
            {type:"food",price:10},
            {type:"food",price:9},
            {type:"food",price:8},
            {type:"book",price:9}
        ];

        db.collection("goods", function (err, collection) {
            if (err) throw err;
            else {
                collection.insert(docs, function (err, docs) {
                    if (err) throw  err;
                    else {
                        collection.find({type: "food", price: {$lt: 10}}).toArray(
                            function (err, docs) {
                                if (err) throw err;
                                else {
                                    console.log(docs);
                                    db.close();
                                }
                            }
                        );
                    }
                })
            }
        });


    }
});

db.on("close", function (err, db) {//关闭数据库
    if (err) throw err;
    else console.log("成功关闭数据库.");
});


/*

 new mongodb.Db('chen',server,{safe:true}).open(function(error,client){
 if(error) throw error;
 var collection = new mongodb.Collection(client,'rncol');
 console.log(collection);
 collection.find(function(error,cursor){

 cursor.each(function(error,doc){
 if(doc){
 console.log("name:"+doc.name+" age:"+doc.age);
 }
 });
 });
 });

 */




