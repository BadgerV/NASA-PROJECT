const {getAllLaunches, scheduleNewLaunch, existLaunchWithId, abortLaunchById} = require('../../models/launches.model')

async function httpGetAllLaunches(req, res) {
  return await res.status(200).json(getAllLaunches());
}

async function httpAddNewLaunch(req, res) {
    const launch = req.body;


    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error : 'Missing required launch property'
        })
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error : 'Invalid launch date'
        });
    }
    await scheduleNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = +req.params.id;

    if(!existLaunchWithId(launchId)) {
         //if launch doesnt exist reuturn 404 not found
    return res.status(404).json({
        error: 'launch not found'
    })
    }
   
    const aborted = abortLaunchById(launchId);

    //id laucnh does exist
    return res.status(200).json(aborted);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}