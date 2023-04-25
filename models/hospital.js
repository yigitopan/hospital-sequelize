'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hospital.belongsToMany(models.User, {
        through: 'UserHospital',
        foreignKey: 'hospital_id'
      });
    }
  }
  Hospital.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    is_removed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};