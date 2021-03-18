const projectModel = require('../models/projects');

exports.addProject = (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    let status = req.body.status;
    let rewardPercentage = req.body.rewardPercentage;
    console.log(title, description, status, rewardPercentage);


    let project = new projectModel({

        title:title,
        description:description,
        status:status,
        rewardPercentage:rewardPercentage
    });
    project.save((err, result) => {

        console.log(result);

    });

}

exports.getProject = (req, res) => {
    projectModel.find((err, result) => {
        if (!err) {
            console.log(result);
            res.send(result)
        }
    });
}