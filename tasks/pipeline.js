/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'vendor_copy/**/*.css',
  'styles/web/*.css'
];
var cssAppFilesToInject = [];



// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  'vendor_copy/jquery/*.js',
  'vendor_copy/**/*.js',

  // Load sails.io before everything else
//  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js',

  'js/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.cssAppFilesToInject = cssAppFilesToInject.map(function(path) {
    return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});



// the base js for loading
var baseJS = function(extJS) {
    var base = ['vendor_copy/jquery/jquery.js',
        'vendor_copy/bootstrap/bootstrap.js',
        'js/dependencies/jquery.cookie.js',
        'js/dependencies/angular.min.js',
        'js/dependencies/jquery.smartbanner.js',
        'js/dependencies/Autocomplete.js'
    ];
    base = base.concat(extJS);
    return base;
}
var appServiceJS = function(extJS) {
    var base = ['vendor_copy/jquery/jquery.js',
        '/js/dependencies/angular.min.js',
        '/js/dependencies/masonry.pkgd.min.js',
        '/js/dependencies/imagesloaded.pkgd.min.js',
        // '/js/dependencies/raven.min.js',
        '/js/app/service/service.js'
    ];
    base = base.concat(extJS);
    return base;
}
var _baseCssApp = function(ext) {
    var base = [
        'styles/app/pub/*.css'
    ];
    base = base.concat(ext);
    return base;
}
var _baseJSApp_nolayzr = function(ext) {
    var base = [
        'js/dependencies/zepto/zepto.min.js',
        'js/dependencies/zepto/touch.js',
        // 'js/dependencies/raven.min.js',
        'js/app/pub/service.js'
    ];
    base = base.concat(ext);
    return base;
}
var _baseJSApp = function(ext) {
    var base = [
        'js/dependencies/layzr/layzr.min.js'
    ];
    base = _baseJSApp_nolayzr().concat(base).concat(ext);
    return base;
}

var _baseJSM = function(ext) {
    var base = [
        // '/js/dependencies/raven.min.js',
        //"/js/app/pub/service.js"
    ];
    base = base.concat(ext);
    return base;
}
var _baseStyleM = function(ext) {
    var base = [
        "/styles/pub/reset.css",
        "/styles/pub/pub.css"
    ];
    base = base.concat(ext);
    return base;
}

var unitJSFiles = [
    {
        name:"main",
        src: _baseJSM(),
        cssStick : _baseStyleM()
    }
];
var unitCssFiles = [
    {
        name:"default",
        src: module.exports.cssFilesToInject
    }
];


module.exports.jsCssConcat = function() {
    var res = {};
    unitJSFiles.forEach(function (f) {
        res[f.name] = {
            "src": f.src.map(function(path) {
                return '.tmp/public/' + path;
            }),
            "dest": '.tmp/public/concat/production_' + f.name + ".js"
        }
    });
    unitCssFiles.forEach(function (f) {
        res[f.name] = {
            "src": f.src,
            "dest": '.tmp/public/concat/production.css'
        }
    });

    unitJSFiles.forEach(function (f) {
        res["app-" + f.name] = {
            "src": f.cssStick.map(function(path) {
                return '.tmp/public/' + path;
            }),
            "dest": '.tmp/public/concat/production_' + f.name + ".css"
        }
    });
    return res;
};

var date = Date.parse(new Date());
module.exports.jsUglify = function() {
    var res = {};
    unitJSFiles.forEach(function (f) {
        res[f.name] = {
            "src": '.tmp/public/concat/production_' + f.name + ".js",
            "dest": '.tmp/public/min/production_' + f.name + '.min.js'
        }
    });

    return res;
};
module.exports.jsDevReplace = function() {
    var res = {};
    unitJSFiles.forEach(function (f) {
        var src = "views/" + f.name + "/*.ejs";
        if (f.directReplace) {
            src = "views/" + f.directReplace;
        }
        res[src] = f.src.map(function(path) {
            return '.tmp/public/' + path;
        });
    });
    return res;
};
module.exports.cssDevReplace = function() {
    var res = {
        "views/*.ejs":cssFilesToInject.map(function(path) {
            return '.tmp/public/' + path;
        })
    };
    return res;
};
module.exports.cssAppDevReplace = function() {
    var res = {};
    unitJSFiles.forEach(function (f) {
        var src = "views/" + f.name + "/*.ejs";
        res[src] = f.cssStick.map(function(path) {
            return '.tmp/public/' + path;
        });
    });
    console.log("print::" + JSON.stringify(res));
    return res;
};
module.exports.jsReplace = function() {
    var res = {};
    unitJSFiles.forEach(function (f) {
        var src = "views/" + f.name + "/*.ejs";
        if (f.directReplace) {
            src = "views/" + f.directReplace;
        }
        res[src] = ['.tmp/public/min/production_' + f.name + '.min.js'];
    });
    return res;
};

module.exports.cssReplace = function() {
    var res = {
        "views/*.ejs":['.tmp/public/min/production.min.css']
    };
    return res;
};
module.exports.cssAppReplace = function() {
    var res = {};

    unitJSFiles.forEach(function (f) {
        var src = "views/" + f.name + "/*.ejs";
        res[src] = ['.tmp/public/min/production_' + f.name + '.min.css'];
    });
    return res;
};
module.exports.getTimeStamp = function() {
    return date;
};
module.exports.cssMin = function() {
    var res = [];
    // normal css
    res.push({
        src: ['.tmp/public/concat/production.css'],
        dest: '.tmp/public/min/production.min.css'
    });
    // app css
    unitJSFiles.forEach(function (f) {
        res.push({
            "src": f.cssStick.map(function(path) {
                return '.tmp/public/' + path;
            }),
            "dest": '.tmp/public/min/production_' + f.name + ".min.css"
        });
    });
    return res;
}


