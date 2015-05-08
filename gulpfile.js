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
    //mix.styles(['app.css']);
    //mix.copy('resources/assets/static', 'public/static');
    browserify.init();

    mix.browserify('todo/app.js', {
        transform:     ["babelify"],
        insertGlobals: true,
        rename:        "todo.js"
    });



});

elixir.extend('watchify', function (mix) {
    mix.livereload();
});
