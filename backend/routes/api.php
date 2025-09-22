<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TourDetailController;
use App\Http\Controllers\NotificationController;

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


// Reviews – publik për të gjithë
Route::get('/reviews', [ReviewController::class, 'index']);

//Categorie/Tours Details:

Route::get('/tour-details', [TourDetailController::class, 'index']);
Route::get('/tour-details/{id}', [TourDetailController::class, 'show']);




Route::middleware('auth:api')->group(function () {

    Route::get('/me', [AuthController::class, 'me']);

    //Bokkings Routes:
    Route::post('/bookings', [BookingController::class, 'store']);
    Route::get('/bookings/my', [BookingController::class, 'myBookings']);
    Route::put('/bookings/{id}', [BookingController::class, 'update']);
    Route::delete('/bookings/{id}', [BookingController::class, 'destroy']);

    //Reviews:
    Route::post('/reviews', [ReviewController::class, 'store']);

    //Notifications:
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::post('/notifications/mark-as-read', [NotificationController::class, 'markAsRead']);
    
});
