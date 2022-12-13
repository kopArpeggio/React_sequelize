module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Students
}