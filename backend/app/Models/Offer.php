<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'image',
        'activities',
        'tours',
        'price',
        'original_price',
        'badge',
        'rating',
        'hero_image',
        'description',
        'days',
        'max_group',
        'valid_until',
        'highlights',
        'gallery',
        'itinerary',
        'included',
        'features',
    ];
    //Offer page
    protected $casts = [
        'highlights' => 'array',
        'gallery' => 'array',
        'itinerary' => 'array',
        'included' => 'array',
        'features' => 'array',
    ];
}
