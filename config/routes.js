/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

    '/': "ToolsController.home",
    '/copy': "HomeController.copy",
    '/new': "HomeController.new",
    '/submit': "HomeController.submit",
    '/set' : {
        view: 'setting'
    },
    '/@rss' : "SpiderController.rssParse",
    '/@rss-test' : "SpiderController.excuteRssInsert",
    '/@feedback' : "CommonController.addFeedback",
    'post /@title-get' : "CommonController.parseHtmlTitle",
    'post /@login' : "CommonController.login",
    'post /@register' : "CommonController.register",
    'post /@addWeb': "CommonController.addLink",
    'post /@duang': "HomeController.duang",
    'post /@comment': "CommentController.addComment",
    'post /@getcomments': "CommentController.getComments",
    'get /@email-send': "CommonController.emailSend",
    'get /next/': "HomeController.next",
    'get /about': "HomeController.about",
    'get /feedback': "HomeController.feedback",
    'get /login': "HomeController.login",
    'get /item/:id': "CommentController.item",
    'get /item/:id/*': "CommentController.item",

    'get /sitemap.xml' : 'SeoController.siteMapXml',
    'get /sitemap' : 'SeoController.siteMapHTML',

    'get /weixin/': "WeiXinController.signature",
    'post /weixin/': "WeiXinController.receive",

    'post /chrome/': "ChromeController.sendNotification",

    'get /api/hp/idlist/0': "ApiController.list",
    'get /api/reading/carousel': "ApiController.carousel",
    'get /api/reading/index': "ApiController.read",
    'get /api/essay/2152': "ApiController.essay",

    'get /json-parser-online': "ToolController.jsonparseonline",
    'get /html-char': "ToolController.htmlCode",
    'get /github-web-daily-hot': "GithubController.getList",
    'get /online-image-sprite': "ToolController.onlineimagesprite",
    'get /online-compress-image': "ToolController.onlinetinypng",
    'get /vector-icon-font': "ToolController.iconfonts",
    'get /favicon-generator': "ToolController.favicongenerator"



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
