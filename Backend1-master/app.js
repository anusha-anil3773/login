const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// var multer = require('multer')
// var path = require('path')
// var csv = require('csvtojson')
// var bodyParser = require('body-parser')

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, './public/uploads')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname)
//     },
//   })
// var uploads = multer({ storage: storage })
require('./middleware/mongoDB') // initiate mongodb connection

const app = new express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

// function verifyToken(req, res, next) {//token
//     if (!req.headers.authorization) {
//         return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if (token === 'null') {
//         return res.status(401).send('Unauthorized request')
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if (!payload) {
//         return res.status(401).send('Unauthorized request')
//     }
//     req.userId = payload.subject
//     next()
// }
const userApi = require('./routes/user');
app.use('/api', userApi);

//server code
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})