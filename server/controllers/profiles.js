///// c.r.u.d- create, read, update, delete

const db = require('../models');
const Profile = db.profiles 
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    const profile = {
        profileid: req.body.profileid,
        profilename : req.body.profilename,
        contactname : req.body.contactname,
        email : req.body.email,
        phone : req.body.phone,
        address : req.body.address
    }

    // res.send(profile)\
    Profile.create(profile)
    .then(body => res.send(body))
    .catch(err => res.status(500).send({
        message: err.message || "error has occurred while creating profile"
    }))
};

exports.findAll = (req, res) => {
    Profile.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "some error occurred while retrieving all profiles "}))
};

exports.findOne = (req, res) => {
    const id = req.params.id; ///// URL segments that are used to capture the values specified at their position in the URL
    Profile.findOne(id)
    .then(data => {
        if(data)
            res.send(data)
        else
            res.status(404).send({message:`Cannot find Profile with id=${id}.`})
        })
    .catch(err => res.status(500).send({message:`Error retrieving Profile with id=${id}`}))
};

exports.update = (req, res) => {
    const id = req.params.id;
        Profile.update(req.body, { where: { id: id}})
        .then( num => {
            if(num == 1)
                res.send({message: "Profile was updated successfully."})
            else
                res.send({message: `Cannot update Profile with id=${id}`});
            })
        .catch(err => res.status(500).send({message:`Error updating Profile with id=${id}`})) 
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Profile.destroy({ where: { id: id }})
    .then( num => {
        if(num == 1)
            res.send({message: "Profile was deleted successfully."})
        else
        res.send({message: `Cannot delete Profile with id=${id}`});
        })
    .catch(err => res.status(500).send({message:`Could not delete Profile with id=${id}`})) 
};

exports.deleteAll = (req, res) => {
    Profile.destroy({ where: {},
        truncate: false ///// tell the output sink to display the full column
    })
    .then(nums=> res.send({message: `${nums} Profile where deleted successfully.`}))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while removing all Profiles."
})) 
};

exports.findAllPublished = (req, res) => {
    Profile.findAll({where:{published:true}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while retrieving Profiles."}))
};
