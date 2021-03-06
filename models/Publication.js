module.exports = (sequelize, DataTypes) => {
    const Publication = sequelize.define(
        "Publication", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            image: DataTypes.STRING,
            like: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            create_at: DataTypes.DATE,
            update_at: DataTypes.DATE,
        }, {
            timestamps: false,
        }
    );

    Publication.associate = (models) => {
        Publication.belongsTo(models.User, {
            foreignKey: "user_id",
        });

        Publication.hasMany(models.Comment, {
            foreignKey: "publication_id",
        });
    };

    return Publication;
};