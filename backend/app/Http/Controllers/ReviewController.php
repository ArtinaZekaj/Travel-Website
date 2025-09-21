<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $review = Review::create([
            'user_name' => $request->user_name,
            'rating'    => (int) $request->rating,
            'comment'   => $request->comment,
            'created_at' => now(),
        ]);

        return response()->json($review, 201);
    }

    public function index()
    {
        $reviews = Review::orderBy('created_at', 'desc')->get();
        return response()->json($reviews);
    }
}
