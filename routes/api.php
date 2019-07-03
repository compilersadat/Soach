<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('parent-registraion','RegistrationController@parentRegister');
Route::post('parent-login','LoginController@parentLogin');
Route::post('student-registraion','RegistrationController@studentRegister');
Route::post('add-class','StdController@store');
Route::post('add-qtn','QuestionController@store');
Route::post('del-class','StdController@destroy');
Route::post('del-subject','SubjectController@destroy');
Route::post('del-question','QuestionController@destroy');
Route::post('del-test','TestController@destroy');
Route::get('get-classes','StdController@index');
Route::get('get-subjects','SubjectController@index');
Route::get('get-questions','QuestionController@index');
Route::get('get-test','TestController@index');
Route::post('get-subjects-by-class','SubjectController@getByClass');
Route::post('add-subject','SubjectController@store');
Route::post('add-test','TestController@store');
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::post('logout', 'LoginController@logout');
    Route::post('get-user', 'LoginController@getAuthUser');

});
