const Person = require('./personmodel'); //model imported

async function addPerson(name, age, email) {
    try {
        //create New Object
        const newPerson = new Person({ name, age, email });
        const user = await Person.findOne({ email:email });
        if (user == undefined) {
            let resp = await newPerson.save();
            console.log("User created Successfully", resp)
        }else{
            console.log("email id already registered with us")
        }
    } catch (error) {
        console.log("Error while inserting data", err)
    }
}
async function fetchAll() {
    try {
        const response = await Person.find();
        console.log(response);
    } catch (error) {
        console.log("Error while Retriving data", err)
    }
}
async function fetchById(id) {
    try {
        const response = await Person.findById(id);
        console.log(response);
    } catch (error) {
        console.log("Error while Retriving data", err)
    }
}
async function fetchByName(name) {
    try {
        const response = await Person.findOne({ name: name });
        console.log(response);
    } catch (error) {
        console.log("Error while Retriving data", err)
    }
}

async function updatePerson(id, person) {
    try {
        const resp = await Person.findByIdAndUpdate(id, person)
        console.log("User updated: ", resp);
    } catch (error) {
        console.log("Error while Updating data", err)
    }
}
async function deletePerson(id) {
    try {
        const resp = await Person.findByIdAndDelete(id);
        console.log("User deleted: ", resp);
    } catch (error) {
        console.log("Error while Updating data", err)
    }
}

module.exports = {
    addPerson,
    fetchAll,
    fetchById,
    fetchByName,
    updatePerson,
    deletePerson
}
