/**
 * HomeController
 *
 */
var ejs = require('ejs');
var avs = require('../services/AVService.js');
var limit = 100;
var item = "S_ITEM";

module.exports = {
    siteMapXml: function (req, res) {

        avs.findHome(req,item,{"new":true,"limit":100}).then(function(result) {
            var resArray = result.listArray;
            res.render("siteMapXml",{"data":resArray});
        },function(error) {
            res.notFound();
        });
    },
    siteMapHTML: function (req, res) {

        avs.findHome(req,item,{"new":true}).then(function(result) {
            var resArray = result.listArray;
            res.view("siteMapXml",{"data":resArray});
        },function(error) {
            res.notFound();
        });
    }
};

