const http = require('http');


const app = require('./app');

const { mongoConnect } = require('./services/mongo');

const  {loadPlanetsData} = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

//aIPGAuJsfeGjwMrR


const server = http.createServer(app);




async function startServer() {
    await mongoConnect()
    await loadPlanetsData();
}
server.listen(PORT, () => {
    console.log(`listeniong on port ${PORT}`)
})

startServer();