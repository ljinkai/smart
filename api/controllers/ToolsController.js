/**
 * HomeController
 *
 */
var ejs = require('ejs');
var Q = require('q');
var AV = require('avoscloud-sdk').AV;
var avs = require('../services/AVService.js');
var limit = 30;

module.exports = {
    home: function (req, res) {
        res.view("tools/list",{});
    }
};

