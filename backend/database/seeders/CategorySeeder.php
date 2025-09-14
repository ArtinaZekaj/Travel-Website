<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::insert([
            [
                'title' => 'Adventure Tours',
                'slug' => 'adventure-tours',
                'image' => 'https://www.peakadventuretour.com/blog/wp-content/uploads/2018/06/Bungee-Jumping-in-India.jpg',
            ],
            [
                'title' => 'Cultural Tours',
                'slug' => 'cultural-tours',
                'image' => 'https://www.kosovo-vacations.com/ressourcen/images/folk-costumes-albanian.jpg',
            ],
            [
                'title' => 'Beach Getaways',
                'slug' => 'beach-getaways',
                'image' => 'https://i.pinimg.com/736x/1d/f9/da/1df9dadcb030bd9306538aa36a2c23a4.jpg',
            ],
            [
                'title' => 'Luxury Escapes',
                'slug' => 'luxury-escapes',
                'image' => 'https://cdn.luxurytravelmag.com.au/wp-content/uploads/2024/08/08120051/Luxury-Escapes.jpg',
            ],
            [
                'title' => 'Family Vacations',
                'slug' => 'family-vacations',
                'image' => 'https://www.tripsavvy.com/thmb/aAAxdP94OvytY3ptQ_mbUAKTXHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FamilySkiTrip_GettyImages-5925ec6a3df78cbe7e70f24f.jpg',
            ],
        ]);
    }
}
