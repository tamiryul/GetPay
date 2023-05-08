///// ראוטר שינהל את טבלת debts
module.exports = app => {
    const debts = require('./../controllers/debts.js') //// נצרוך את הcontrollers
    var router = require("express").Router();

///// כשיש לי ראוט כזה איזה פונקציה צריך להפעיל

///// יצירה חדשה
    router.post("/", debts.create);

///// אחזור כל המידע
    router.get("/", debts.findAll);

///// אחזור מידע בודד
    router.get("/:id", debts.findOne);

///// עדכון
    router.put("/:id", debts.update);

///// מחיקה
    router.delete("/:id", debts.delete);

///// מחיקת הכל
    router.delete("/", debts.deleteAll);

///// תציג כל מה שפורסם
    router.get("/published", debts.findAllPublished);

///// כל מערכת ההפניות יכילו את זה ואז את הראוט
    app.use('/main/apiDebts/debts', router)

///// נבנה הפניית POST רגילה
    // router.post("/", debts.create, (req,res) => {
    //     const addunit = new addUnit(req.body);
    //     addunit.save()
    //     .then((result) => res.send(result))
    //     .catch((err) => console.error(err));
    // });
};