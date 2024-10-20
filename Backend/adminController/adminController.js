const db=require('../databaseConfig')



// Save Data In Database Query
exports.saveData=(req,res)=>{
    let courseTitle=req.body.courseTitle
    let language=req.body.language
    let discount=req.body.discount
    let teacherName=req.body.teacherName
    let time=req.body.time
    let lessons=req.body.lessons
    let regularPrice=req.body.regularPrice
    let salePrice=req.body.salePrice
    let image=req.file.filename
    let value =[[courseTitle,language,discount,teacherName,time,lessons,regularPrice,salePrice,image]]
    let sql='insert into courseDetails (courseTitle,language,discount,teacherName,time,lessons,regularPrice,salePrice,image) values ? '
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Save')
        }
    })
    

}


// Delete Data from Data Base Query

exports.deleteData=(req,res)=>{
    let id = req.params.id
    let sql='delete from courseDetails where id=?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Deleted')
        }
    })
}

// Get Data From Data Base Query
exports.getData=(req,res)=>{
    let sql = 'select * from courseDetails'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}



// Get Data From Data Base by Id  Query

exports.viewData=(req,res)=>{
    let id=req.params.id
    let sql= 'select * from courseDetails where id =?'
    db.query(sql,[id],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}



// Update and Edit Data in Data Base Query
exports.updateData=(req,res)=>{
    let id=req.params.id
    let newData=req.body
    let sql = 'update courseDetails set ? where id=?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Updated')
        }
    })
}