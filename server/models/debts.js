module.exports = (sequelize, Sequelize) => {
    const Debts = sequelize.define("debts", {
        debtid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        profileid : {type: Sequelize.INTEGER},
        productid : {type: Sequelize.INTEGER},
        amount : {type: Sequelize.INTEGER},
        discount : {type: Sequelize.INTEGER},
        finalprice : {type: Sequelize.INTEGER},
        debtnumber : {type: Sequelize.INTEGER}
    })

    return Debts

}
