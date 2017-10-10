const mongoose = require('mongoose');
const userSchema = require('../schemas/User');

module.exports = mongoose.model('User', userSchema);