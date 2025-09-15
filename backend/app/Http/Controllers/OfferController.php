<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function index()
    {
        return response()->json(Offer::all());
    }
    public function show($slug)
    {
        $offer = Offer::where('slug', $slug)->firstOrFail();
        return response()->json($offer);
    }
}
