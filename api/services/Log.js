/**
 * Dependencies
 */
var sails = require('sails');
var log = sails.log;

/**
 * Fixtures to be used directly by mocha's `before`, `after`, `beforeEach`,
 * `afterEach`, and `it` methods.
 *
 * @type {Object}
 */
module.exports = {
        silly: function () {
            var args = Array.prototype.slice.call(arguments);
            log.silly(args.join(" "));
        },

        verbose: function () {
            var args = Array.prototype.slice.call(arguments);
            log.verbose(args.join(" "));
        },

        info: function () {
            var args = Array.prototype.slice.call(arguments);
            log.info(args.join(" "));
        },

        blank: function () {
            var args = Array.prototype.slice.call(arguments);
            log.blank(args.join(" "));
        },

        debug: function () {
            var args = Array.prototype.slice.call(arguments);
            log.debug(args.join(" "));
        },

        warn: function () {
            var args = Array.prototype.slice.call(arguments);
            log.warn(args.join(" "));
        },

        error: function () {
            var args = Array.prototype.slice.call(arguments);
            log.error(args.join(" "));
            // 捕获一个异常
            client.captureError(new Error(args.join(" ")));
        },

        obj: function(obj) {
            var output = "";
            for(var i in obj){  
                var property=obj[i];  
                output+=i+" = "+property+"\n"; 
            }  
            log.info(output);
        }
};


