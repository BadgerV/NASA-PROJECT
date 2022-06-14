// const launches = require('./launches.mongo')

const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler exploration X',
    rocket: 'Exploreer Is1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['NASA', 'ZTM'],
    upcoming : true,
    success: true
};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
    return launches.has(launchId)
}

function getAllLaunches () {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        success : true,
        upcoming : true,
        customers: ['Zero to mastery', 'NASA'],
        flightNumber : latestFlightNumber,
    }));
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existLaunchWithId,
    abortLaunchById
}