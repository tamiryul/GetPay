///// c.r.u.d- create, read, update, delete

//// נצרוך את המודל
const db = require('../models');
const Debt = db.debts ///// התממשקות עם הטבלה
const Op = db.Sequelize.Op
const sequelize = require("sequelize");

///// יצירה חדשה
exports.create = (req, res) => {
    const debt = {
        debtid: req.body.debtsid,
        profileid : req.body.profileid,
        productid : req.body.productid,
        amount : req.body.amount,
        discount : req.body.discount,
        finalprice : req.body.finalprice,
        debtnumber : req.body.debtnumber
    }

    ///// נבצע שמירה
    Debt.create(debt)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
        message: err.message || "error has occurred while creating Debt"
    }))
}

///// אחזור
exports.findAll = (req, res) => {
    // const totalDebts = `select profiles.profilename, debts.debtnumber ,
    //                 sum(debts.finalprice) as totalDebt from debts
    //                 inner join profiles
    //                 on debts.profileid = profiles.profileid
    //                 inner join products
    //                 on debts.productid = products.productid
    //                 group by debts.debtnumber`
    Debt.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "some error occurred while retrieving all Debts "}))
}

///// חיפוש יחיד לפי ID
exports.findOne = (req, res) => {
    const id = req.params.id; ///// URL segments that are used to capture the values specified at their position in the URL
    Debt.findOne(id)
    .then(data => {
        if(data)
            res.send(data)
        else
            res.status(404).send({message:`Cannot find Debt with id=${id}.`})
    })
    .catch(err => res.status(500).send({message:`Error retrieving Debt with id=${id}`}))
};

///// לעדכן לפי ID
exports.update = (req, res) => {
    const id = req.params.id;
        Debt.update(req.body, { where: { id: id}})
        ///// חפש את הנתון, במידה והמספר תואם לחיפוש תוציא הודעה, במידה ולא תוציא הודעת שגיאה
        .then( num => {
            if(num == 1)
                res.send({message: "Debt was updated successfully."})
            else
                res.send({message: `Cannot update Debt with id=${id}`});
            })
        .catch(err => res.status(500).send({message:`Error updating Debt with id=${id}`})) 
};

///// מחיקה
exports.delete = (req, res) => {
    const id = req.params.id;
    Debt.destroy({ where: { id: id }})
    .then( num => {
        if(num == 1)
            res.send({message: "Debt was deleted successfully."})
        else
        res.send({message: `Cannot delete Debt with id=${id}`});
    })
    .catch(err => res.status(500).send({message:`Could not delete Debt with id=${id}`})) 
};

///// מחיקת כל הנתונים
exports.deleteAll = (req, res) => {
    Debt.destroy({ where: {},
        truncate: false ///// tell the output sink to display the full column
    })
    .then(nums=> res.send({message: `${nums} Debt where deleted successfully.`}))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while removing all Debts."
    })) 
};

///// חיפוש כל הפרופילים שפורסמו
exports.findAllPublished = (req, res) => {
    Debt.findAll({where:{published:true}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while retrieving Debt."}))
};

///// sequelize model querying- aggregation mysql in sequelize nodeJs
Debt.sync({ alter: true}).then(() => {
    return Debt.findAll({
                    attributes:[[sequelize.fn('sum', sequelize.col('finalprice')), 'Total Debt']],
                    group: 'debtnumber',
                    // include: {
                    //     attributes: 'profileid',
                    //     model: 'profiles',
                    //     // required: true
                    //   }
                },);
}).then((data) => {
    data.forEach((element) => {
        console.log(element.toJSON());
    })
})
.catch((err) => {
    console.log(err);
});
