require('dotenv').config();

const process = require('node:process');

const arrEvent = [];

process.on("SIGINT", (event) => {
    arrEvent.push(event);
    console.log('Just Received SIGINT.');
    setTimeout(() => {
        if (arrEvent.length > 1) {
            console.log("Stop process NODE.JS!");
            process.exit(0);
        } else {
            arrEvent.length = 0;
        }
    }, 3000)
})

setInterval(() => { }, 2000);