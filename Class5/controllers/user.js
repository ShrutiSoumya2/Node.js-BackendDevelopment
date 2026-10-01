import fs from 'fs';
const getuser = (req, res) => {
    let data = fs.readFileSync('./database/data.json','utf-8'); //from server.js pov, since function runs in server.js.
    //'../database/data.json' //importing data from file from pov of user.js file.
    data = JSON.parse(data); //parsing data from string to object
    res.status(200).json({
        message: "Data fetched successfully",
        success: true,
        data
    })
}

const createuser = (req, res) => {
    console.log('first')
    let {name, age, id} = req.body; //destructuring data from request body
    //let name = req.body.name; //destructuring data from request body
    //let age = req.body.age; //destructuring data from request body
    //let id = req.body.id; //destructuring data from request body
    if(!name || !age || !id){
        return res.status(404).json({
            message: "Data not found",
            success: false
        })
    }
    let data = fs.readFileSync('./database/data.json','utf-8'); //from server.js pov, since function runs in server.js.
    data = JSON.parse(data);
    data.push({name, age, id});
    fs.writeFileSync('./database/data.json', JSON.stringify(data,null,3)); //writing data to file
    res.status(200).json({
        message: "Data created successfully",
        success: true,
        data
    })
}
const updateuser = (req, res) => {
    const id = req.params.id; //destructuring data from request params, can send id in api endpoint
    let {name, age} = req.body; //destructuring data from request body
    let data = fs.readFileSync('./database/data.json','utf-8');
    data = JSON.parse(data);  //data is in string format in data.json file, so we need to parse it to object format
    //(let index = data.findIndex((e) => e.id == id); //finding index of data to be updated
    //data.splice(index, 1, {name, age, id}); //updating data in array)
    let user = data.find((e) => e.id == id); //finding data to be updated
    // let user = data.find((element)=>
    //     return element.id == id
    // });
    // user[index].name = name; //updating data
    console.log(user);
    if (name){
        user.name = name //updating data
    }
    if (age){
        user.age = age //updating data
    }
    fs.writeFileSync('./database/data.json', JSON.stringify(data,null,3)); //writing data to file, null does formating, 3 is for indentation, stringify converts object to json string
    res.status(200).json({
        message: "Data updated successfully",
        success: true,
        data
    })
}

const deleteuser = (req, res) => {
    const id = Number(req.params.id); //destructuring data from request params, can send id in api endpoint
    let data = fs.readFileSync('./database/data.json','utf-8');
    data = JSON.parse(data)
    let index = data.findIndex((e) => {
        return e.id === id
    }); //finding index of data to be deleted
    data.splice(index, 1); //deleting data
    fs.writeFileSync('./database/data.json', JSON.stringify(data,null,3)); //writing data to file
    res.status(200).json({
        message: "Data deleted successfully",
        success: true,
        data
    })
}
const getuserbyid = (req, res) => {
    const id = req.params.id;

export {getuser, createuser, updateuser, deleteuser}