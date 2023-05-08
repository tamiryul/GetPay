///// ראוטר שינהל את טבלת profiles
module.exports = app => {
    const profiles = require('./../controllers/profiles.js') //// נצרוך את הcontrollers
    var router = require("express").Router();

///// כשיש לי ראוט כזה איזה פונקציה צריך להפעיל

///// יצירה חדשה
    router.post("/", profiles.create);

///// אחזור כל המידע
    router.get("/", profiles.findAll);

///// אחזור מידע בודד
    router.get("/:id", profiles.findOne);

///// עדכון
    router.put("/:id", profiles.update);

///// מחיקה
    router.delete("/:id", profiles.delete);

///// מחיקת הכל
    router.delete("/", profiles.deleteAll);

///// תציג כל מה שפורסם
    router.get("/published", profiles.findAllPublished);

///// כל מערכת ההפניות יכילו את זה ואז את הראוט
    app.use('/api/profiles', router);

    
/// נבנה הפניה פשוטה
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