// commands to interact with mongodbs
// to activate shell use mongosh command in terminal

//show dbs//shows the databases in the current mongodb server

///use BCAsectionA//it will create name of database but database will not be created until we create a collection in it

db//shows the current database name 
db.createCollection("students")//creates a collection called students
//show collections//shows the collections in the current database

db.createCollection("teachers")//creates a collection called teachers
//show collections//shows the collections in the current database
db.students.drop()//drops the collection called students
db.teachers.drop()//drops the collection called teachers
db.dropDatabase()//drops the current database


db.students.insertOne(
    {
        _id: 1,
        name: "Shruti",
        age: 21
    }

)
db.students.find()//finds all the documents in the collection students

db.teachers.find()//finds all the documents in the collection teachers

//individual data is called document, but every document needs an id which is manadatory, if we don't give id, it is automatically assigned by mongodb

db.students.insertOne(  
    {
        name: "Sneha",
        age: 21,
        gender: "Female",
        cgpa: 7.9
    }
)
db.students.insertMany([
    {
        name: 'Ankit',
        age:17,
        gender:'male',
        cgpa:6.5,
        course:'BTech'
    },
    {
        name: 'Jigar',
        age:18,
        gender:'male',
        cgpa:9.5,
        course:'BTech'
    },
    {
        name: 'Rahul',
        age:25,
        gender:'male',
        cgpa:10,
        course:'MCA'
    },
    {
        name: 'Payal',
        age:29,
        gender:'female',
        cgpa:9.5,
        course:'BCA'
    },
    {
        name: 'Swati',
        age:26,
        gender:'female',
        cgpa:5.5,
        course:'BCA'
    },
    {
        name: 'Nandan',
        age:37,
        gender:'male',
        cgpa:9.5,
        course:'BTech'
    },
])
db.students.find({
    name : 'Rahul'
})
db.students.findOne({
    _id: ObjectId('6ac76afaf7563e295f5ebba1')
})
db.students.findOne()
db.students.find({
    course: 'BCA'
})
db.students.findOne({
    course: 'BCA'
})

db.students.deleteOne({
    name: 'Ankit'
})
db.students.deleteMany({
    gender: 'female'
})
db.students.deleteMany({})
db.students.updateOne(
    { _id: ObjectId('6ac76afaf7563e295f5ebba1') },
    { $set: { cgpa: 10 } }
)
db.students.updateMany(
    {gender: 'male'},
    { $set: {course: 'BCA'} }
)
db.students.find({
    age:{$gt :20}
})

db.students.find({
    gender:{$eq : 'female'}
})
db.students.find({
    $and: [{age :{$gt:26}}, {gender: 'female'}]
})
db.students.find({
    $or: [{age :{$gt:26}}, {gender: 'male'}]
})

db.students.find({
    age:{$lt :30}
}).sort({age:1})
db.students.find({
    age:{$lt :30}
}).sort({age:-1})
db.students.find().skip(3)
db.students.find().limit(3)