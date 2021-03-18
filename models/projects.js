const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    
    title: { type: String },
    description: { type: String },
    status: { type: Boolean },
    rewardPercentage: { type: Number }

});

module.exports = mongoose.model('project', projectSchema);
