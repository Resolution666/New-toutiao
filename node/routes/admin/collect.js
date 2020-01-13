let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mgdb');
let pathLib = require('path')
let fs = require('fs');

//添加 
router.post('/', (req, res, next) => {
  
  let { content, title,  auth ,des} = req.body;//拆除body数据
  let time = Date.now();//创建服务器上传时间
  
   //multer多图片循环，找到
  let auth_icon;
  
  req.files && req.files.forEach((file, index) => {
    //抓取到对应图片
    if (file.fieldname === 'auth_icon') {
      auth_icon = '/upload/product/' + file.filename + pathLib.parse(file.originalname).ext;
    }
    // console.log('a',icon,banner)
    fs.renameSync(//本地图片命名
      file.path,
      file.path + pathLib.parse(file.originalname).ext
    )
  })



  //未传图片处理
  if (!auth_icon) auth_icon = '/upload/noimage.png';

  // console.log('b',banner,icon)

  mgdb.open(
    {
      collectionName: 'collect'
    }
  ).then(
    ({collection, client}) => {
      collection.insertOne(
        { title, des, time, detail: { auth_icon, auth, content } }
        ,
        (err, result) => {
          if (!err && result.result.ok) {
            // res.send({ error: 0, mess: '成功', data:  result.result.ops[0] })
            res.send({ err: 0, msg: '成功', data: { _id: result.insertedId, title, des, time, detail: { auth_icon, auth, content } } })
            // res.render('ejs页面',数据)  大后端

            //发布  推送 **********
            let io = require('../../bin/www'); //require要在需要时再引入
            io.emit('mess_type',{data:title})//推送
            
          } else {
            res.send({ err: 1, msg: '添加失败' })
          }
          client.close();
        }
      )
    }
  )
})

//删 
router.delete('/:id', (req, res, next) => {

  let id = req.params.id;
  if (!id) {
    res.send({ err: 1, msg: 'id为必传参数' });
    return;
  }

  mgdb.open({
    collectionName: 'collect'
  }).then(
    ({collection, client, ObjectId}) => {
      collection.deleteOne({
        _id: ObjectId(id)
      },((err, result) => {
        // console.log(result);// 添加条件 > 0
        if(result.result.n>0){
          res.send({err:0,msg:'删除成功'})
          // res.render('xxx.ejs',{数据})
        }else{
          res.send({err:1,msg:'删除失败'})
        }
        client.close();//关闭连接
      }))
    }
  )
})

//改
router.patch('/:id', (req, res, next) => {
  let id = req.params.id;

  if (!id) {
    res.send({ err: 1, msg: 'id为必传参数' })
    return;
  }

  mgdb({
    collectionName: 'collect'
  }).then(
    ( {collection, client, ObjectId} ) => {
      collection.find({
        _id: ObjectId(id)
      }, {
          projection: { _id: 0 }//显示的key 
        }).toArray((err, result) => {
  
          // result[0] = 库数据
  
          //传过来的数据 和 库数据  合并
          let {title,des,auth,content} = req.body;
          title = title || result[0].title;
          des = des || result[0].des;
          auth = auth || result[0].auth;
          content = content || result[0].detail.content;
  
  
          //multer多图片循环，找到
          let icon, banner;
          req.files && req.files.forEach((file, index) => {
            //抓取到对应图片
            if (file.fieldname === 'auth_icon') {
              auth_icon = '/upload/product/' + file.filename + pathLib.parse(file.originalname).ext;
            }
            fs.renameSync(//本地图片命名
              file.path,
              file.path + pathLib.parse(file.originalname).ext
            )
          })
  
          auth_icon = auth_icon || result[0].detail.auth_icon;
          let time = Date.now();
  
  
          mgdb({
            collectionName: 'collect'
          }).then(
            ( {collection, client, ObjectId} ) => {
              collection.updateMany({
                _id: ObjectId(id)
              },{
                $set:{
                  title,des,time,detail:{auth,auth_icon,content}
                }
              },{
                upsert:false, //插入
                projection:false //全局替换
              },((err, result) => {
                // console.log(result.result.n);//成功条件 > 0
                // console.log(result.modifiedCount);// 修改的条数
    
                if(result.result.n>0){
                  res.send({err:0,msg:'修改成功'})// + 返回改后的数据
                  // req.render('xx.ejs',{数据})
                }else{
                  res.send({err:1,msg:'修改失败'})  
                }
                client.close();//关闭连接
              }))
            }
          )
          
        })
    }
  )
})

module.exports = router;