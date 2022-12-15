module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
        
        Firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })

    return Students
}