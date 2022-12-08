const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userInfo = require('../models/user')

//read user list 
exports.getAllUser = async(req, res) => {
    try {
        const list = await userInfo.find();
        res.send(list);
    } catch (error) {
        console.log(error);
    }
}

// read single user detail
exports.getOneUser = async(req, res) => {
    try {
        let id = req.params.id;
        let user = await userInfo.findById(id);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

// add new user
exports.addUser = async(req, res) => {
    try {
        // store the front end entered details in server variable
        console.log(req.body);
        bcrypt.hash(req.body.password, 10).then((hash) => {
            // store hash in the database
            let usernew = {
                user_name: req.body.user_name,
                email_id: req.body.email_id,
                password: hash,
                user_type: req.body.user_type,
                contact_number: req.body.contact_number,
                office_location: req.body.office_location,
                course: req.body.course
            }

            let user = new userInfo(usernew);
            let saveUser = user.save();
            res.send(saveUser);
        })
    } catch (error) {
        console.log(error);
    }
}

// update user detail
exports.updateUser = async(req, res) => {
    try {
        let id = req.body._id;
        let user = {
            user_name: req.body.user_name,
            email_id: req.body.email_id,
            password: req.body.password,
            user_type: req.body.user_type,
            contact_number: req.body.contact_number,
            office_location: req.body.office_location,
            course: req.body.course
        }
        let updateInfo = await userInfo.findByIdAndUpdate({ '_id': id }, { $set: user });
        res.send(updateInfo)
    } catch (error) {
        console.log(error);
    }
}

// delete user detail
exports.deleteUser = async(req, res) => {
    try {
        let id = req.params.id;
        let deleteUser = await userInfo.deleteOne({ '_id': id });
        res.send(deleteUser);
    } catch (error) {
        console.log(error);
    }
}

// csvfile-----------------------------------------------starts try

// exports.getcsv = async(req, res) => {
//     userInfo.find((err, data) => {
//       if (err) {
//       } else {
//         if (data != '') {
//           res.render('index', { data: data })
//         } else {
//           res.render('index', { data: '' })
//         }
//       }
//     })
//   }
// //   exports.post('/', uploads.single('csvFile'), (req, res) => {
//     var empResponse
//     exports.getcsv = async(req, res) => {
//     csv()
//       .fromFile(req.file.path)
//       .then((response) => {
//         for (var x = 0; x < response; x++) {
//           empResponse = parseFloat(response[x].user_name)
//           response[x].user_name = empResponse
//           empResponse = parseFloat(response[x]. email_id)
//           response[x].email_id = empResponse
//           empResponse = parseFloat(response[x].contact_number)
//           response[x].contact_number = empResponse
//           empResponse = parseFloat(response[x].course)
//           response[x].Location = empResponse
//         }
//         userInfo.insertMany(response, (err, data) => {
//           if (err) {
//             console.log(err)
//           } else {
//             res.redirect('/')
//           }
//         })
//       })
//   }

// Login Api







username="admin@gmail.com"
password="1234"
exports.login = (req, res) => {
    let userData =req.body

    if(!username){
        res.status(401).send('invalid username')
    }else
    if(password !== userData.password){
        res.status(401).send('invalid password')
    }
    else{
        let payload = {subject:username+password}
        let token =jwt.sign(payload,'secretkey')
        res.status(200).send({token})
    }
  }

  
