///// c.r.u.d- create, read, update, delete

//// נצרוך את המודל
const db = require('../models');
const Profile = db.profiles ///// התממשקות עם הטבלה
const Op = db.Sequelize.Op

///// יצירה חדשה
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
    /// נבצע שמירה
    Profile.create(profile)
    .then(body => res.send(body))
    .catch(err => res.status(500).send({
        message: err.message || "error has occurred while creating profile"
    }))
};

///// אחזור
exports.findAll = (req, res) => {
    Profile.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "some error occurred while retrieving all profiles "}))
};

///// חיפוש יחיד לפי ID
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

///// לעדכן לפי ID
exports.update = (req, res) => {
    const id = req.params.id;
        Profile.update(req.body, { where: { id: id}})
        ///// חפש את הנתון, במידה והמספר תואם לחיפוש תוציא הודעה, במידה ולא תוציא הודעת שגיאה
        .then( num => {
            if(num == 1)
                res.send({message: "Profile was updated successfully."})
            else
                res.send({message: `Cannot update Profile with id=${id}`});
            })
        .catch(err => res.status(500).send({message:`Error updating Profile with id=${id}`})) 
};

///// מחיקה
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

///// מחיקת כל הנתונים
exports.deleteAll = (req, res) => {
    Profile.destroy({ where: {},
        truncate: false ///// tell the output sink to display the full column
    })
    .then(nums=> res.send({message: `${nums} Profile where deleted successfully.`}))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while removing all Profiles."
})) 
};

///// חיפוש כל הפרופילים שפורסמו
exports.findAllPublished = (req, res) => {
    Profile.findAll({where:{published:true}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while retrieving Profiles."}))
};