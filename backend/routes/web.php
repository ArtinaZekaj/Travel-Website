<?php

use Illuminate\Support\Facades\Route;
use App\Models\TestDocument;

Route::get('/mongo-test', function () {
    TestDocument::create([
        'name' => 'Inserted via Eloquent',
        'created_at' => now(),
    ]);

    return response()->json([
        'status' => 'success',
        'data' => TestDocument::all()
    ]);
});
