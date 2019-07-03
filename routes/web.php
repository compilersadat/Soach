<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/',function(){
   return view('welcome');
});

Route::get('/parent/{path?}', function($path = null){ return View::make('welcome'); })->where('path', '.*');

Route::get('/admin/{dir?}', function($dir = null){ return View::make('admin'); })->where('dir', '.*');