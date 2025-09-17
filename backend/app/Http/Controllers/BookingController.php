<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    /**
     * Store a new booking
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'destination_id' => 'nullable|exists:destinations,id',
            'tour_id' => 'nullable|exists:tours,id',
            'offer_id' => 'nullable|exists:offers,id',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'guests' => 'required|integer|min:1',
            'days' => 'required|integer|min:1',
            'preferred_date' => 'required|date',
        ]);

        $booking = Booking::create([
            ...$validated,
            'user_id' => Auth::id(),
        ] + $request->only([
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

    /**
     * Get bookings of the logged-in user
     */
    public function myBookings()
    {
        $bookings = Booking::where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($bookings);
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::where('user_id', Auth::id())->findOrFail($id);

        $validated = $request->validate([
            'preferred_date' => 'date|nullable',
            'guests' => 'integer|min:1|nullable',
            'phone' => 'string|nullable',
            'address' => 'string|nullable',
            'special_requests' => 'string|nullable',
            'travel_details' => 'string|nullable',
        ]);

        $booking->update($validated);

        return response()->json([
            'message' => 'Booking updated successfully',
            'booking' => $booking
        ]);
    }

    public function destroy($id)
    {
        $booking = Booking::where('user_id', Auth::id())->findOrFail($id);
        $booking->delete();

        return response()->json(['message' => 'Booking deleted successfully']);
    }
}
