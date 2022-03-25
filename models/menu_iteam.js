const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('menu_iteam', {
        menu_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        menu_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        menu_type: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        menu_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_logged_in: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        }
    }, {
        sequelize,
        tableName: 'menu_iteam',
        timestamps: false,
        indexes: [{
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "menu_id" },
            ]
        }, ]
    });
};