'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Termin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Termin.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
      Termin.belongsTo(models.User, { as: 'doctor', foreignKey: 'doctor_id' });
      Termin.belongsTo(models.Hospital, { foreignKey: 'hospital_id' });
    }
  }
  Termin.init({
    date: DataTypes.DATE,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    hospital_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Hospital',
        key: 'id'
      }
    },
    is_removed: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Termin',
  });
  return Termin;
};