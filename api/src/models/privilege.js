'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Privilege extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Privilege.belongsToMany(models.Role, {
        through: 'RolePrivilege',
        foreignKey: 'privilege_id'
      });
    }
  }
  Privilege.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Privilege',
  });
  return Privilege;
};