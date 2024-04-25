import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from "../database/database.js";
import salidas from './salidas.js';


export const Barco = sequelize.define('barco' , {

    num_matricula: {type: DataTypes.INTEGER,
    primaryKey: true,
},
    nombre : {
        type: DataTypes.STRING
},
    amarre : {
    type: DataTypes.INTEGER
},
    idsocio : {
        type: DataTypes.INTEGER
    }
})

// One to many : barco -> salidas
Barco.hasMany(salidas, {
    foreignKey: 'num_matricula',
    sourceKey: 'num_matricula'
})
salidas.belongsTo(Barco, {
    foreignKey: 'num_matricula',
    targetId: 'num_matricula'
})

export default Barco;