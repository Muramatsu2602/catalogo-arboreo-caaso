import { DataTypes } from 'sequelize';
import orm from '../orm';

const arvoreModel = orm.define('arvore', {
  LATITUDE: { type: DataTypes.DECIMAL(10, 8), primaryKey: true },

  LONGITUDE: { type: DataTypes.DECIMAL(10, 8), primaryKey: true },

  ESPECIE: { type: DataTypes.STRING(255), primaryKey: true },

  FOTO: { type: DataTypes.STRING(1024) },

  PONTO_REFERENCIA: { type: DataTypes.STRING(511) },

  DESCRICAO: { type: DataTypes.STRING(511) },

  IDADE: { type: DataTypes.NUMBER },

  NIVEL_RISCO: { type: DataTypes.STRING(6) },

  RESPONSAVEL: { type: DataTypes.STRING(255) },

  REMOVEDOR: { type: DataTypes.STRING(255) },
});

export default arvoreModel;
