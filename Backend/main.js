const express=require('express')
const db=require('./databaseConfig')
const cors=require('cors')
const route=require('./adminRoute/adminRoute')

let app =express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
// app.use()

db.connect((err)=>{
    if(err) throw err
    else{
        console.log('DataBase Is connected')
    }
})


const create=`
create table if not exists courseDetails(
id int not null auto_increment,
    courseTitle varchar(255) null,
    language varchar(255) null,
    discount varchar(255) null,
    teacherName varchar(50) null,
    time varchar(50) null,
    lessons varchar(50) null,
    regularPrice varchar(50) null,
    salePrice varchar(50) null,
    image varchar(255) null,
    primary key(id)
)
`
db.query(create,(err,result)=>{
    if(err) throw err
    else{
        console.log('Table Created')
    }
})

app.use('/api',route)

app.listen(8500,()=>{
    console.log('Server Is Running 8500')
})