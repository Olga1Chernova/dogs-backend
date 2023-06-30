const { sequelize } = require('./config/database');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testConnection();
