const express = require('express');
const cors = require('cors');
const db = require('./models/');
const app = express();


let corsOption = {origin: '*'}

/////לאילו מקורות נאפשר גישה לשרת
app.use(cors(corsOption))

/////נאפשר לטפל בבקשות בצורת- JSON
app.use(express.json());

/////נאפשר לטפל בבקשות בצורת - URL ENCODED
app.use(express.urlencoded({extended: true}));


///// נכלול את מערכת הראוט
require("./routes/profiles.js")(app);

///// נכלול את מערכת הראוט
require("./routes/products.js")(app);

///// נכלול את מערכת הראוט
require("./routes/debts.js")(app);

///// סנכרון עם מסד הנתונים 
db.sequelize.sync();


// // ///// נבנה הפניה פשוטה
// app.get("/", (req, res)=>{
//     res.json({message:"welcome to my web"});
// })

// /////
// app.post("/add-Profile", (req,res) => {
//     console.log(req.body)
//     const addunit = new addUnit(req.body);
//     addunit.save()
//     .then((result) => res.send(result))
//     .catch((err) => console.error(err));
// })

/////set port
const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});



