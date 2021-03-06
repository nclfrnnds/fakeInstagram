module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            username: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: DataTypes.STRING,
        }, {
            timestamps: false,
        }
    );

    User.associate = (models) => {
        User.hasMany(models.Publication, {
        foreignKey: "user_id",
        });
    };

    return User;
};