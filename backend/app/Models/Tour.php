<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id', 'title', 'country', 'location',
        'days', 'group', 'rating', 'price',
        'image', 'level', 'desc'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
