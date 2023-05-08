module.exports = app => {
    const products = require('./../controllers/products.js') 
    var router = require("express").Router();

    router.post("/", products.create);

    router.get("/", products.findAll);

    router.get("/:id", products.findOne);

    router.put("/:id", products.update);

    router.delete("/:id", products.delete);

    router.delete("/", products.deleteAll);

    router.get("/published", products.findAllPublished);

    app.use('/NewInvoice/apiProducts/products', router)
}
