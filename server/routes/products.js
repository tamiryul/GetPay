///// ראוטר שינהל את טבלת products
module.exports = app => {
    const products = require('./../controllers/products.js') //// נצרוך את הcontrollers
    var router = require("express").Router();

///// כשיש לי ראוט כזה איזה פונקציה צריך להפעיל

///// יצירה חדשה
    router.post("/", products.create);

///// אחזור כל המידע
    router.get("/", products.findAll);

///// אחזור מידע בודד
    router.get("/:id", products.findOne);

///// עדכון
    router.put("/:id", products.update);

///// מחיקה
    router.delete("/:id", products.delete);

///// מחיקת הכל
    router.delete("/", products.deleteAll);

///// תציג כל מה שפורסם
    router.get("/published", products.findAllPublished);

///// כל מערכת ההפניות יכילו את זה ואז את הראוט
    app.use('/NewInvoice/apiProducts/products', router)
}