///// מגדיר איך נראית הטבלה במסד הנתונים
module.exports = (sequelize, Sequelize) => {
    const Profiles = sequelize.define("profiles", {
        profileid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        profilename : {type: Sequelize.STRING},
        contactname : {type: Sequelize.STRING},
        email : {type: Sequelize.STRING},
        phone : {type: Sequelize.INTEGER},
        address : {type: Sequelize.STRING},
    })

    return Profiles

}