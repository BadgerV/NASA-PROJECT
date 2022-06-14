const http = require('http');

const mongoose = require('mongoose');

const app = require('./app');

const  {loadPlanetsData} = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

//aIPGAuJsfeGjwMrR

const MONGO_URL = 'mongodb+srv://nasa-api:aIPGAuJsfeGjwMrR@nasacluster.9017gym.mongodb.net/nasa?retryWrites=true&w=majority'

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDb connection ready')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})


async function startServer() {
    await mongoose.connect(MONGO_URL, {
       useNewUrlParser: true
    });
    await loadPlanetsData();
}
server.listen(PORT, () => {
    console.log(`listeniong on port ${PORT}`)
})

startServer();