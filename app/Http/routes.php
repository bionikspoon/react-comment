<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/',
    function () {
        return view('index');
    });

Route::get('tasklist',
    function () {
        return view('tasklist');
    });

Route::get('todo',
    function () {
        return view('todo');
    });

Route::get('search-box',
    function () {
        return view('search-box');
    });

Route::get('twitter-feed',
    function () {
        return view('twitter-feed');
    });

Route::get('cart',
    function () {
        return view('cart');
    });
