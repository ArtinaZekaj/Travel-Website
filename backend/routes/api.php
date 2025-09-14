<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinationController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/refresh', [AuthController::class, 'refresh']);
Route::post('/logout', [AuthController::class, 'logout']);




Route::get('/destinations', [DestinationController::class, 'index']);





Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
});
