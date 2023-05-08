///// מגדיר איך נראית הטבלה במסד הנתונים
module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        productid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productname : {type: Sequelize.STRING},
        productprice : {type: Sequelize.INTEGER},
        producttype : {type: Sequelize.STRING}
    })

    return Products

}