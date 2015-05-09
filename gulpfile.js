var elixir = require('laravel-elixir');
var browserify = require('laravel-elixir-browserify');
require('laravel-elixir-livereload');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('todo/todo.scss', 'public/css');

    browserify.init();

    mix.browserify('cart/app.js', {
        transform:     [
            [
                "babelify",
                {
                    stage:             0,
                    optional:          [
                        'strict',
                        'react'
                    ]
                }
            ]
        ],
        rename:        "cart.js",
        insertGlobals: true
    }).browserify('search-box/app.react.js', {
        transform:     ['babelify'],
        rename:        "search-box.js",
        insertGlobals: true
    }).browserify('todo/app.js', {
        transform:     ['babelify'],
        rename:        "todo.js",
        insertGlobals: true
    }).browserify('twitter-feed/app.js', {
        transform:     ['babelify'],
        rename:        "twitter-feed.js",
        insertGlobals: true
    });
    mix.livereload();


});


