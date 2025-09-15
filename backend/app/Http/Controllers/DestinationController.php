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

    // Merr një destinacion sipas kodit
    public function show($code)
    {
        $destination = Destination::where('code', $code)->first();

        if (!$destination) {
            return response()->json(['message' => 'Destination not found'], 404);
        }

        return response()->json($destination);
    }
}
