const { DataTypes, Sequelize} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo ***********************************
  sequelize.define('dog', {
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
    },
    height:{  //Altura
      type: DataTypes.STRING,
      allowNull: false
    },
    weight:{  //Peso
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span:{  //anios de vida
      type: DataTypes.STRING,
      allowNull: false
    }

    //falta la imagen del perro
    //falta separar minimo y maximo de peso y altura
  });


  
};
