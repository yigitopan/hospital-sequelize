'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: 'UserRole',
        foreignKey: 'user_id'
      });

      User.belongsToMany(models.Hospital, {
        through: 'UserHospital',
        foreignKey: 'user_id'
      });
      
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    tc: DataTypes.STRING,
    is_removed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};