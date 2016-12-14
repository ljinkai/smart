/**
 * HomeController
 *
 */
var tools = require('../services/Tools.js');
var log = require('../services/Log.js');
var ejs = require('ejs');
var path = require('path');


module.exports = {
    home: function (req, res) {
        res.render("home/homeLayout");
    }
};

