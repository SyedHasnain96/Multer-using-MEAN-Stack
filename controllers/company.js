const Company = require('../models').Company
const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: 'public/images/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000000000000
    }
}).single('profileImage');
module.exports = {
    create(req, res) {
        upload(req, res, (err) => {
            if (err) {
                res.status(500).send(err)
            } else {
                req.body.imagePath = req.file.path
                return Company.create(
                        req.body
                    )
                    .then(company => res.status(201).send(company))
                    .catch(error => res.status(500).send(error));
            }
        })

    }
}