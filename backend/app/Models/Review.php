<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Review extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'reviews';

    protected $fillable = [
        'ref_type',
        'ref_id',
        'user_id',
        'user_name',
        'rating',
        'comment',
        'created_at',
    ];
}
