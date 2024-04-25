import Sequelize from 'sequelize'
export const sequelize = new Sequelize('club' , 'pcempresa' , 'onmula',{
host: 'localhost',
dialect: 'mysql'
});