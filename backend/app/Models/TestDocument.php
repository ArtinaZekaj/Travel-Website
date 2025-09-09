<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model; // ose: Jenssegers\Mongodb\Eloquent\Model

class TestDocument extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'test_collection';
    protected $fillable = ['name', 'created_at'];
}
