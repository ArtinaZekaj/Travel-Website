<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use App\Models\Category;
use Illuminate\Http\Request;

class TourController extends Controller
{
    // Merr të gjitha tour-et e një kategorie sipas slug
    public function getByCategory($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $tours = Tour::where('category_id', $category->id)->get();

        return response()->json([
            'category' => $category,
            'tours' => $tours
        ]);
    }
}
