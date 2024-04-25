import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from "../database/database.js";
import barco from './barco.js'; // Se importa el nombre de la tabla no de la clase.


export const Socio = sequelize.define('socio' , {

    idsocio: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    nombre : {
        type: DataTypes.STRING
},
    telefono : {
    type: DataTypes.INTEGER
}
})

// One to many : socio -> barco
Socio.hasMany(barco, {
    foreignKey: 'idsocio',
    sourceKey: 'idsocio'
})
barco.belongsTo(Socio, {
    foreignKey: 'idsocio',
    targetId: 'idsocio'
})
