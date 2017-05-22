/**
 * HomeController
 *
 */
var ejs = require('ejs');
var marked = require('marked');
var AV = require('avoscloud-sdk').AV;
var sc = require('node-schedule');
var sails = require('sails');
var log = sails.log;
var http = require('http');
var request = require('request');
var KEY = require("../services/key.js");

module.exports = {
    links: function (req, res) {
        res.view("lib/tools",{});
    }
};

