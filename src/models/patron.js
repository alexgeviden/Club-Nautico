import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from "../database/database.js";
import salidas from "./salidas.js";


export const Patron = sequelize.define('patrones' , {

    idepatron: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
nombre: {
        type: DataTypes.STRING
    }
})

//One to many : patron -> salidas
Patron.hasMany(salidas, {
    foreignKey: 'idepatron',
    sourceKey: 'idepatron'
})
salidas.belongsTo(Patron, {
    foreignKey: 'idepatron',
    targetId: 'idepatron'
})
