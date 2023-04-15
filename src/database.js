import { connect } from "mongoose";

import { MONGO_URI } from "./config"

(async() => {

    try {
        const db = await connect(MONGO_URI)
        console.log('DB Conected to', db.connection.name);
    } catch (error) {
        console.log(error);
    }

})()

// const mongoose = require('mongoose');

// mongoose.set('useFindAndModify', false);
// mongoose.connect('mongodb+srv://LicoresRafa:licoresElRafa@cluster0.scjfvan.mongodb.net/?retryWrites=true&w=majority', {
//     useCreateIndex: true,
//     useNewUrlParser: true,

// });

// console.log('listo')
//     .then(db => console.log('Db is connected'))
//     .catch(err => console.log(err));






// mongodb+srv://LicoresRafa:licoresElRafa@cluster0.scjfvan.mongodb.net/?retryWrites=true&w=majority