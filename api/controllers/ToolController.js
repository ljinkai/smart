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
    },
    jsonparseonline: function (req, res) {
        res.render("json_parse_online/json_parse_online",{});
    },
    htmlCode: function (req, res) {
        res.view("htmlcode/htmlCode",{"extData":{"title":"HTML特殊符号对照表 - 酷粒","keywords":"HTML,特殊符号,编码,ASCII码,命名实体,十进制编码",
            "desc":"HTML中一些无法打出来的符号可以用相应的代码进行代替显示，以下对照表提供了一些HTML特殊符号相应的代码"}});
    }
};

