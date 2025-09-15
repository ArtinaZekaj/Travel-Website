<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'destination_id' => 'nullable|exists:destinations,id',
            'tour_id' => 'nullable|exists:tours,id',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'guests' => 'required|integer|min:1',
            'days' => 'required|integer|min:1',
            'preferred_date' => 'required|date',
        ]);

        $booking = Booking::create($validated + $request->only([
            'address',
            'passport_number',
            'dob',
            'special_requests',
            'travel_details'
        ]));

        return response()->json([
            'message' => 'Booking created successfully',
            'booking' => $booking,
        ], 201);
    }
}
