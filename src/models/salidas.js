import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from "../database/database.js";


export const Salidas = sequelize.define('salidas' , {

    idsalida: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    fecha : {
        type: DataTypes.DATE
    },

    destino : {
    type: DataTypes.STRING
},
    num_matricula : {
        type: DataTypes.INTEGER
    },
    idpatron : {
        type : DataTypes.INTEGER
    }
})

export default Salidas;