<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'destination_id',
        'tour_id',
        'offer_id',
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'passport_number',
        'dob',
        'special_requests',
        'travel_details',
        'guests',
        'preferred_date',
        'days',
    ];
}
