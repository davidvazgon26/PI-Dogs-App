const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo ***********************************
  
  sequelize.define('temperaments', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4  //Generacion aut de id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique:true
      //DataTypes.ARRAY(DataTypes.STRING)

      
      
    },
  });

  
};
