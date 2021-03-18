const transactionModel = require('../models/transaction');
const user = require('../models/userModel');

exports.addTransaction = (req, res) => {

    let userId = req.body.userId;
    let amount = req.body.amount;
    let date = new Date();
    let projectId = req.body.projectId;

    let transaction = new transactionModel({
        amount: amount,
        date: date,
        projectId: projectId
    });
    transaction.save((err, result) => {
        if(err) 
        {
            res.send({err})
        }
        else{
            console.log(result)
        }
    });

    user.findOneAndUpdate({ _id: userId }, {$push:{"projectTransaction":{ projectId: projectId, date: date, transactonAmount: amount }}}, (err, result) => {

        if (err) {
            res.send({ err })
        }
        else {
            console.log("adjajkdajdjakjb",result)
            res.send(result)
        }
    })
}
