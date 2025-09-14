<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Destination;

class DestinationController extends Controller
{
    // Merr të gjitha destinacionet
    public function index()
    {
        return response()->json(Destination::all());
    }
}
