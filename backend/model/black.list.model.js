// const mongoose = require('mongoose')

// const blacklistSchema = mongoose.Schema({
//     token: { type: String },
//     createdAt: { type: Date, expires: 214500, default: Date.now }
// });

// const blacklistModel = mongoose.model('Blacklist', blacklistSchema)

// module.exports = { blacklistModel }


const mongoose = require('mongoose');

const blacklistSchema = mongoose.Schema({
    token: { type: String, required: true },
    createdAt: { type: Date, expires: '214500s', default: Date.now }
});

const blacklistModel = mongoose.model('Blacklist', blacklistSchema);

module.exports = { blacklistModel };