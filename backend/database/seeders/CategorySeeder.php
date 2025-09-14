<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::updateOrInsert(
            ['slug' => 'adventure-tours'],
            [
                'title' => 'Adventure Tours',
                'image' => 'https://www.peakadventuretour.com/blog/wp-content/uploads/2018/06/Bungee-Jumping-in-India.jpg',
                'subtitle' => 'Experience the thrill of a lifetime with our carefully curated adventure tours',
                'hero_image' => 'https://www.highriskvoyager.com/media/falcq2si/istock-1369171053.jpg',
            ]
        );

        Category::updateOrInsert(
            ['slug' => 'cultural-tours'],
            [
                'title' => 'Cultural Tours',
                'image' => 'https://www.kosovo-vacations.com/ressourcen/images/folk-costumes-albanian.jpg',
                'subtitle' => 'Traditions, history, and authentic cultural experiences',
                'hero_image' => 'https://api.time.com/wp-content/uploads/2017/03/holi-2.jpg?quality=85&w=1800',
            ]
        );

        Category::updateOrInsert(
            ['slug' => 'beach-getaways'],
            [
                'title' => 'Beach Getaways',
                'image' => 'https://i.pinimg.com/736x/1d/f9/da/1df9dadcb030bd9306538aa36a2c23a4.jpg',
                'subtitle' => 'Sea, sun, and stunning sunsets',
                'hero_image' => 'https://d.newsweek.com/en/full/1310267/best-hawaii-beaches.jpg',
            ]
        );

        Category::updateOrInsert(
            ['slug' => 'luxury-escapes'],
            [
                'title' => 'Luxury Escapes',
                'image' => 'https://cdn.luxurytravelmag.com.au/wp-content/uploads/2024/08/08120051/Luxury-Escapes.jpg',
                'subtitle' => '5-star resorts and exclusive private experiences',
                'hero_image' => 'https://img.freepik.com/premium-photo/beach-resorts-luxury-escapes-background_670382-168476.jpg',
            ]
        );

        Category::updateOrInsert(
            ['slug' => 'family-vacations'],
            [
                'title' => 'Family Vacations',
                'image' => 'https://www.tripsavvy.com/thmb/aAAxdP94OvytY3ptQ_mbUAKTXHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FamilySkiTrip_GettyImages-5925ec6a3df78cbe7e70f24f.jpg',
                'subtitle' => 'Fun and safe packages designed for families',
                'hero_image' => 'https://ecm.capitalone.com/WCM/learn-grow/card/lgc060_hero_traveling-on-a-budget_v1/rtablet.jpg',
            ]
        );
    }
}
