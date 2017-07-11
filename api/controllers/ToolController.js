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
    },
    onlineimagesprite: function (req, res) {
        res.view("sprite/sprite",{"extData":{"title":"在线雪碧图制作 - 酷粒","keywords":"雪碧图,css雪碧图,在线拖动,sprite,在线,online,图片合并",
            "desc":"在线雪碧图生成，css雪碧图生成，在线拖动，生成png和css代码"}});
    },
    onlinetinypng: function (req, res) {
        res.view("tiny/tiny",{"extData":{"title":"在线压缩图片png或者JPEG - 酷粒","keywords":"压缩图片,PNG,JEPG,最小化,在线,online,compress",
            "desc":"在线压缩图片png或者JPEG, 优化图片质量"}});
    },
    iconfonts: function (req, res) {
        res.view("icons/icon_index",{"extData":{"title":"在线矢量图标库icon font - 酷粒","keywords":"矢量图标,阿里巴巴,icon font,在线矢量,online icon",
            "desc":"阿里巴巴在线矢量图标库"}});
    }
};

