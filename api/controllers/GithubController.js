/**
 * HomeController
 *
 */
var ejs = require('ejs');
var AV = require('avoscloud-sdk').AV;
var sc = require('node-schedule');
var sails = require('sails');
var log = sails.log;
var http = require('http');
var request = require('request');
var cheerio = require("cheerio");
var KEY = require("../services/key.js");
var needle = require('needle');



var avs = require('../services/AVService.js');
var emailServ = require('../services/EmailService.js');
var randtoken = require('rand-token');
AV.initialize(KEY.key1, KEY.key2);
var ids = [];
var item = "S_ITEM";
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
module.exports = {
    getList: function (req, res) {
        var options = {};
        // post request
        var str = getNowFormatDate();
        var url = "https://api.github.com/search/repositories?q=language:JavaScript+pushed:" + str + "&sort=stars";
        needle.get(url, options,function(error, result) {
            if (error) {
                log.error("getHomeItems:error:",error);
            } else {
                var body = result.body;
                var statusCode = result.statusCode;
                if (statusCode == 200) {// success
                    var obj = result.body;
                    //log.debug(JSON.stringify(obj.items));
                    res.view("github/popular",{"data":obj.items,
                        "extData":{"title":"Github每日web最热项目 - 酷粒","keywords":"github,web,javascript,css3,html5,node.js,最热,hot,popular,流行,框架,开源项目",
                            "desc":"每日来这里看看，了解github上优秀的开源项目，开眼界，也能自己用的上"}});
                } else {//error
                    log.error("loginFacebook:", JSON.stringify(body));

                    res.ok({"status": 400, "msg": {}});
                }
            }
        });
    }
};

