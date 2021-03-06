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

Route::middleware('auth:api')->get('/todos', function (Request $request) {
    return $request->user();
});

Route::get("v1/todos","TodosCrudController@getTodos")->middleware('logger');

// Route::get("v1/todos",[\Modules\Todos\Http\Controllers\TodosCrudController::class,"getTodos"]);
Route::post("/v1/todos",[\Modules\Todos\Http\Controllers\TodosCrudController::class,"addTodo"])->middleware('logger');
Route::put("/v1/todos",[\Modules\Todos\Http\Controllers\TodosCrudController::class,"updateTodo"])->middleware('logger');
Route::delete("/v1/todos",[\Modules\Todos\Http\Controllers\TodosCrudController::class,"deleteTodo"])->middleware('logger');
