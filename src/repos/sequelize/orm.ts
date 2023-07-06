import EnvVars from '@src/constants/EnvVars';
import { Sequelize } from 'sequelize';

export default new Sequelize(
  EnvVars.DataBase.serviceName,
  EnvVars.DataBase.username,
  EnvVars.DataBase.password,
  {
    host: EnvVars.DataBase.host,
    port: EnvVars.DataBase.port,
    dialect: 'oracle',
  }
);
