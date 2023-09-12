// 1-  Bring express Here
const express = require("express")
const { faker } = require('@faker-js/faker')
// - DEFINE THE PORT AS GLOBAL VARIABLE
const PORT = 5000
const app = express()


const createUser = () => {
    const newUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password:faker.internet.password(),
        phoneNumber:faker.phone.number()
    };
    return newUser;
};

const createCompany= () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address:{
        street: {
            street:faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()}
        }
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    res.send(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.send(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.send({user:createUser(),company:createCompany()});
});

app.get('/user',(req,res) =>
{
    res.json(createUser())
})

app.get('/company',(req,res) =>
{
    res.json(createCompany())
})

// 3- Run the server 

app.listen(PORT, ()=>{
    console.log(`>>>SERVER IS RUNNING ON PORT ${PORT}<<<`);
})