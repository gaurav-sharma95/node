require('dotenv').config();

module.exports = {
  name: 'default',
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
};
