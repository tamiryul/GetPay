module.exports = app => {
    const profiles = require('./../controllers/profiles.js')
    var router = require("express").Router();

    router.post("/", profiles.create);

    router.get("/", profiles.findAll);

    router.get("/:id", profiles.findOne);

    router.put("/:id", profiles.update);

    router.delete("/:id", profiles.delete);

    router.delete("/", profiles.deleteAll);

    router.get("/published", profiles.findAllPublished);

    app.use('/api/profiles', router);

    
    app.get("/", (req, res)=>{
        res.json({message:"welcome to my web"});
    })

///
    // router.post("/", profiles.create, (req,res) => {
    //     const addunit = new addUnit(req.body);
    //     addunit.save()
    //     .then((result) => res.send(result))
    //     .catch((err) => console.error(err));
    // })
}
