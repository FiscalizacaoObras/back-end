const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, path.resolve("uploads"));
    },

    filename: (req, file, callback) => {
        const time = new Date().getTime();

        const cleanName = file.originalname
            .normalize("NFD")                  
            .replace(/[\u0300-\u036f]/g, "")  
            .replace(/\s+/g, "_")             
            .replace(/[^a-zA-Z0-9._-]/g, ""); 

        callback(null, `${time}_${cleanName}`);
    },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
