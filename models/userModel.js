const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    address: { type: String },
    poolRewards: { type: String },
    referralCode: { type: String },
    parentUsers: { type: String },
    childrenUsers: { type: String },
    blance: { type: Number },
    
    projectTransaction: {
        projectId: { type: mongoose.Schema.Types.Object},
        date: { type: Date },
        transactonAmount: { type: Number }
    }
});

module.exports = mongoose.model('users', userSchema);

