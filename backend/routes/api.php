<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\BookingController;

// -------- AUTH --------
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/refresh', [AuthController::class, 'refresh']);
Route::post('/logout', [AuthController::class, 'logout']);

// -------- PUBLIC ROUTES --------
// Home section
Route::get('/destinations', [DestinationController::class, 'index']);
// Home categories
Route::get('/categories', [CategoryController::class, 'index']);
// Home offers
Route::get('/offers', [OfferController::class, 'index']);

// Categories Page
Route::get('/categories/{slug}/tours', [TourController::class, 'getByCategory']);
// Destination Page
Route::get('/destinations/{code}', [DestinationController::class, 'show']);
// Offer Page
Route::get('/offers/{slug}', [OfferController::class, 'show']);

// -------- BOOKING --------
// nëse do që booking të jetë vetëm për user të loguar (me JWT), vendose brenda middleware
Route::middleware('auth:api')->group(function () {
    Route::post('/bookings', [BookingController::class, 'store']);
    Route::get('/me', [AuthController::class, 'me']);
});


