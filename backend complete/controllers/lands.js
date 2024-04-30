const Land = require('../models/land');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const { cloudinary } = require("../cloudinary");




module.exports.index = async function (req, res) {
    const lands = await Land.find({});
    res.json({ lands })
}

module.exports.createLand = async function (req, res) {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.land.location,
        limit: 1
    }).send()
    const land = new Land(req.body.land);
    if (req.body.land.price > 10000) {
        req.flash(`error`, "Enter a valid price less than 100000");
        res.redirect(`/lands/new`);
    }
    else {
        land.geometry = geoData.body.features[0].geometry;
        land.images = req.files.map(function (f) {
            return ({ url: f.path, filename: f.filename })
        })
        console.log(land.geometry.coordinates);
        land.author = req.user._id;
        await land.save();
        req.flash(`success`, `Success In Adding a new Land `);
        res.redirect(`/lands/${land._id}`);
    }
}

module.exports.userInfo = async function (req, res) {
    const { id } = req.params;
    const land = Land.findById(id).populate(`author`);
    if (!land) {
        req.flash(`error`, `No Land Found `);
        return res.redirect(`/lands`);
    }
    res.json({ land })

}
module.exports.showLand = async function (req, res) {
    const { id } = req.params;
    const land = await Land.findById(id).populate({
        path: `reviews`,
        populate: {
            path: `author`,
        }
    }).populate(`author`);
    if (!land) {
        req.flash(`error`, `No Land Found `);
        return res.redirect(`/lands`);
    }
    res.json({ land })
}

module.exports.renderEditForm = async function (req, res) {
    const { id } = req.params;
    const land = await Land.findById(id);
    if (!land) {
        req.flash(`error`, `No Land Found `);
        return res.redirect(`/lands`);
    }
    res.json({ land })
}

module.exports.updateLand = async function (req, res) {
    const { id } = req.params;
    console.log(req.body);
    const land = await Land.findByIdAndUpdate(id, { ...req.body.land });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    land.images.push(...imgs);
    await land.save();
    if (req.body.deleImages) {
        for (let filename of req.body.deleImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await land.updateOne({ $pull: { images: { filename: { $in: req.body.deleImages } } } });
    }
    req.flash(`success`, `Successfully Updated a Land spot `);
    res.redirect(`/lands/${land._id}`);
}
module.exports.deleteLand = async function (req, res) {
    const { id } = req.params;
    await Land.findByIdAndDelete(id);
    req.flash(`success`, `Successfully deleted a Land `);
    res.redirect(`/lands`)
}

module.exports.likeLand = async function (req, res, next) {
    const { id } = req.params;
    const land = await Land.findById(id);
    if (!land) {
        return res.status(404).json({ message: 'Land not found' });
    }
    // Check if the user has already liked the land
    if (land.likes.includes(req.user._id)) {
        return res.status(400).json({ message: 'You have already liked this land' });
    }
    // Add user's ID to the likes array
    land.likes.push(req.user._id);
    await land.save();
    res.status(200).json({ message: 'Land liked successfully' });
}
module.exports.unlikeLand = async function (req, res) {
    const { id } = req.params;
    const land = await Land.findById(id);
    if (!land) {
        return res.status(404).json({ message: 'Land not found' });
    }
    // Check if the user has liked the land
    if (!land.likes.includes(req.user._id)) {
        return res.status(400).json({ message: 'You have not liked this land' });
    }
    // Remove user's ID from the likes array
    land.likes = land.likes.filter(userId => userId !== req.user._id);
    await land.save();
    res.status(200).json({ message: 'Land unliked successfully' });
}