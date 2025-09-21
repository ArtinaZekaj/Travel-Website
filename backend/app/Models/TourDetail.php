<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourDetail extends Model
{
    use HasFactory;

    protected $table = 'tour_details';

    protected $fillable = [
        'category_slug',
        'destination',
        'hero_title',
        'hero_image',
        'price',
        'days',
        'rating',
        'overview',
        'highlights',
        'gallery',
        'location',
    ];

    protected $casts = [
        'highlights' => 'array',
        'gallery' => 'array',
        'location' => 'array',
    ];
}
