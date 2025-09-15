<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'description',
        'image',
        'days',
        'price',
        'rating',
        'blurb',
        'gallery',
    ];

    protected $casts = [
        'gallery' => 'array',
    ];
}
