'use strict';

const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const sparkPostTransport = require('nodemailer-sparkpost-transport');

let options = {
    sparkPostApiKey: process.env.SPARKPOST_API_KEY,
};
const transporter = nodemailer.createTransport(sparkPostTransport(options));
const sendMail = async (to, subject, templatename, data) => {
    const templatepath = path.join(__dirname, "template", templatename);
    const template = await ejs.renderFile(templatepath, { data });
    let mail = {
        from: process.env.EMAIL, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: template,
    };
    try {
        let info = await transporter.sendMail(mail);
        return true;
    } catch (error) {
        logger.log('Error:' + error);
    }
};
module.exports = sendMail;
