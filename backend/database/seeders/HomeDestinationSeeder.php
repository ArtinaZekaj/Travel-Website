<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Destination;

class HomeDestinationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Destination::insert([
            [
                'code' => 'XK',
                'name' => 'Kosovo',
                'description' => 'Kosovo, the heart of the Balkans, captivates visitors with its rich history, vibrant culture, and stunning natural landscapes, from rolling hills to majestic mountains.',
                'image' => 'https://barakat.travel/wp-content/uploads/2024/09/Kosovo.jpg',
            ],
            [
                'code' => 'US',
                'name' => 'USA',
                'description' => 'The United States offers a breathtaking variety of experiences, from iconic cities like New York and Los Angeles to majestic national parks, world-class entertainment, and diverse cultures.',
                'image' => 'https://www.pettitts.co.uk/img/containers/assets/destinations/2-north-america/1-usa/main-pages/usa-guides/a-guide-to-the-best-cities-in-the-usa/nashville.webp/b0656ccbdbf0912c21ed2194a058316d/nashville.webp',
            ],
            [
                'code' => 'CH',
                'name' => 'Switzerland',
                'description' => 'Switzerland is a paradise of snow-capped Alps, pristine lakes, and charming villages, offering outdoor adventures, luxury experiences, and a peaceful, high-quality lifestyle.',
                'image' => 'https://maya.net/travel/wp-content/uploads/2024/10/Zermatt-and-the-Matterhorn-1024x576.png',
            ],
            [
                'code' => 'IT',
                'name' => 'Italy',
                'description' => 'Italy enchants travelers with its rich art, historic landmarks, delicious cuisine, and stunning coastlines, from the romantic canals of Venice to the sun-kissed Amalfi coast.',
                'image' => 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/09/roma-1.jpg',
            ],
            [
                'code' => 'JP',
                'name' => 'Japan',
                'description' => 'Japan is a perfect blend of ancient tradition and modern innovation, offering serene temples, futuristic cities, breathtaking cherry blossoms, and unique cultural experiences.',
                'image' => 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3lvdG98ZW58MHx8MHx8fDA%3D',
            ],
            [
                'code' => 'GR',
                'name' => 'Greece',
                'description' => 'Greece enchants visitors with its sun-kissed islands, ancient ruins, and rich mythology, offering stunning beaches, vibrant culture, delicious cuisine, and unforgettable historical sites.',
                'image' => 'https://worldwildschooling.com/wp-content/uploads/2024/01/Small-Towns-in-Europe_Assos_Greece_SCStock_Adobe-Stock-Photo_427227583-1.jpg',
            ],
        ]);
    }
}
