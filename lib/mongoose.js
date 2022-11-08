'use strict';

const mongoose = require('mongoose');

const DB_NAME  = process.env.DB_NAME;
const DB_HOST  = process.env.DB_HOST;
const DB_PORT  = process.env.DB_PORT;


module.exports = {
    connect: () => {
        try {
            const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
            console.log(connectionString);
            const options = { useNewUrlParser: true, useUnifiedTopology: true };
            mongoose.connect(connectionString, options).then(()=>{
                console.log("Database connected... ");
            
            }).catch(err => {
                if (err) {
                    console.log(err);
                }
            });
            mongoose.set('autoCreate', true);
            return mongoose;
        } catch (e) {
            console.log(e);
        }
    }
};
