<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\TourController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/refresh', [AuthController::class, 'refresh']);
Route::post('/logout', [AuthController::class, 'logout']);



Route::get('/destinations', [DestinationController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/offers', [OfferController::class, 'index']);
Route::get('/categories/{slug}/tours', [TourController::class, 'getByCategory']);



Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
});
