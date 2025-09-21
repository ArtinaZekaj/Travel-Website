<?php

namespace App\Http\Controllers;

use App\Models\TourDetail;
use Illuminate\Http\Request;

class TourDetailController extends Controller
{
    public function index()
    {
        return TourDetail::all();  
    }

    public function show($id)
    {
        return TourDetail::findOrFail($id);  
    }
}
