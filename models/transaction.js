const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: { Number: String },
    date: { type: Date },
    projectId:{ type: mongoose.Schema.Types.Object}

});

module.exports = mongoose.model('transaction', transactionSchema);
