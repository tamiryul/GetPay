///// c.r.u.d- create, read, update, delete

//// נצרוך את המודל
const db = require('../models');
const Product = db.products ///// התממשקות עם הטבלה
const Op = db.Sequelize.Op

///// יצירה חדשה
exports.create = (req, res) => {
    const product = {
        productid: req.body.productid,
        productname : req.body.productname,
        productprice : req.body.productprice,
        producttype : req.body.producttype
    }

    ///// נבצע שמירה
    Product.create(product)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
        message: err.message || "error has occurred while creating product"
    }))
}

///// אחזור
exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "some error occurred while retrieving all Products "}))
}

///// חיפוש יחיד לפי ID
exports.findOne = (req, res) => {
    const id = req.params.id; ///// URL segments that are used to capture the values specified at their position in the URL
    Product.findOne(id)
    .then(data => {
        if(data)
            res.send(data)
        else
            res.status(404).send({message:`Cannot find Product with id=${id}.`})
    })
    .catch(err => res.status(500).send({message:`Error retrieving Product with id=${id}`}))
};

///// לעדכן לפי ID
exports.update = (req, res) => {
    const id = req.params.id;
        Product.update(req.body, { where: { id: id}})
        ///// חפש את הנתון, במידה והמספר תואם לחיפוש תוציא הודעה, במידה ולא תוציא הודעת שגיאה
        .then( num => {
            if(num == 1)
                res.send({message: "Product was updated successfully."})
            else
                res.send({message: `Cannot update Product with id=${id}`});
            })
        .catch(err => res.status(500).send({message:`Error updating Product with id=${id}`})) 
};

///// מחיקה
exports.delete = (req, res) => {
    const id = req.params.id;
    Product.destroy({ where: { id: id }})
    .then( num => {
        if(num == 1)
            res.send({message: "Product was deleted successfully."})
        else
            res.send({message: `Cannot delete Product with id=${id}`});
        })
    .catch(err => res.status(500).send({message:`Could not delete Product with id=${id}`})) 
};

///// מחיקת כל הנתונים
exports.deleteAll = (req, res) => {
    Product.destroy({ where: {},
        truncate: false ///// tell the output sink to display the full column
    })
    .then(nums=> res.send({message: `${nums} Product where deleted successfully.`}))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while removing all Products."
    })) 
};

///// חיפוש כל הפרופילים שפורסמו
exports.findAllPublished = (req, res) => {
    Product.findAll({where:{published:true}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while retrieving Products."}))
};