const express = require('express');
const cors = require('cors');
const db = require('./models/');
const app = express();


let corsOption = {origin: '*'}

app.use(cors(corsOption))

app.use(express.json());

app.use(express.urlencoded({extended: true}));


require("./routes/profiles.js")(app);

require("./routes/products.js")(app);

require("./routes/debts.js")(app);

db.sequelize.sync();


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



