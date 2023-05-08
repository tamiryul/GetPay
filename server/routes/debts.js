module.exports = app => {
    const debts = require('./../controllers/debts.js') 
    var router = require("express").Router();

    router.post("/", debts.create);

    router.get("/", debts.findAll);

    router.get("/:id", debts.findOne);

    router.put("/:id", debts.update);

    router.delete("/:id", debts.delete);

    router.delete("/", debts.deleteAll);

    router.get("/published", debts.findAllPublished);

    app.use('/main/apiDebts/debts', router)

    // router.post("/", debts.create, (req,res) => {
    //     const addunit = new addUnit(req.body);
    //     addunit.save()
    //     .then((result) => res.send(result))
    //     .catch((err) => console.error(err));
    // });
};
