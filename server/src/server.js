const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const port = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => { 
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

startServer();
