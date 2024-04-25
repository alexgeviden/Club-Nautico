import Sequelize from 'sequelize'
export const sequelize = new Sequelize('club' , 'root' , '',{
host: 'localhost',
dialect: 'mysql'
});