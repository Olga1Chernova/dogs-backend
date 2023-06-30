require('dotenv').config();
const { sequelize } = require('./config/database');
const express = require('express');
const bodyParser = require('body-parser');
const dogController = require('./controllers/dogController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('Dogshouseservice.Version1.0.1');
});

app.get('/dogs', dogController.getDogs);
app.post('/dog', dogController.createDog);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error('Global Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});