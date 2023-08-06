<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::controller(AuthController::class)->group(function () {
//     Route::post('login', 'login');
//     Route::post('register', 'register');
//     Route::post('logout', 'logout');
//     Route::post('refresh', 'refresh');
    
// });

// Route::group(['middleware' => ['auth:api']],function (){
    Route::controller(ContactController::class)->group(function () {
        Route::post('add-contact','addContact');
        Route::get('get-contacts','getContacts');
        Route::delete('remove-contact/{contact_id}','removeContact');
    });
// });
