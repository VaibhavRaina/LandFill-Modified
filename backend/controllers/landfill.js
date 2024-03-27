const Land = require(`../models/Lands`);
const httpError = require(`../models/http-error`);
module.exports.home = async function (req, res, next) {
    const land = await Land.find({});
    if (!land) {
        throw new httpError(`Error Occured`, 404);
    }
    res.json({ land });
}

module.exports.addNewLand = async function (req, res, next) {
    const land = new Land(req.body);
    if (!land) {
        throw new httpError(`Error Occured`, 404);
    }
    else {
        await land.save();
    }

}