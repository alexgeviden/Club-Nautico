import Sequelize from 'sequelize'
export const sequelize = new Sequelize('club' , 'root' , 'onmula',{
host: 'localhost',
dialect: 'mysql'
});