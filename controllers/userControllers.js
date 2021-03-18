const UserModel = require('../models/userModel');

//referralCode Generator
let uuid4 = require("uuid4");

exports.getReferralCode = (req, res) => {
    let code = uuid4();
    console.log(code)
}

//Add User
exports.Adduser = (req, res) => {

    let username = req.body.username;
    let email = req.body.email;
    let address = req.body.address;
    let referralCode = req.body.referralCode;
    
    let user = new UserModel({
        username: username,
        email: email,
        address: address,
        referralCode: referralCode
    });
    user.save((err, result) => {
        if (!err) {
            res.send({ "result": result })
        }
    });

}

exports.getUser = (req, res) => {

    UserModel.find((err, result) => {
        if (!err) {
            console.log(result);
            res.send(result)
        }

    });
}