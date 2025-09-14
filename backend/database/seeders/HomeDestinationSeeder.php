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
        Destination::truncate();
        
        Destination::insert([
            [
                //Home section
                'code' => 'XK',
                'name' => 'Kosovo',
                'description' => 'Kosovo, the heart of the Balkans, captivates visitors with its rich history, vibrant culture, and stunning natural landscapes, from rolling hills to majestic mountains.',
                'image' => 'https://barakat.travel/wp-content/uploads/2024/09/Kosovo.jpg',

                // Top Destinations fields
                'days' => 5,
                'price' => 1290,
                'rating' => 4.6,
                'blurb' => "Breathtaking mountains, vibrant cafés and welcoming towns across the Balkans’ youngest country.",
                'top_image' => "https://lp-cms-production.imgix.net/2019-06/e228bf3be784ffff7a338ec8d9167d30-pristina.jpg?sharp=10&vib=20&w=1200&w=600&h=400",
            ],
            [
                //Home section
                'code' => 'US',
                'name' => 'USA',
                'description' => 'The United States offers a breathtaking variety of experiences, from iconic cities like New York and Los Angeles to majestic national parks, world-class entertainment, and diverse cultures.',
                'image' => 'https://www.pettitts.co.uk/img/containers/assets/destinations/2-north-america/1-usa/main-pages/usa-guides/a-guide-to-the-best-cities-in-the-usa/nashville.webp/b0656ccbdbf0912c21ed2194a058316d/nashville.webp',

                //Top Destinations section
                'days' => 7,
                'price' => 2490,
                'rating' => 4.7,
                'blurb' => "Iconic cities and national parks — from NYC skylines to the Grand Canyon’s vast horizons.",
                'top_image' => "https://media.timeout.com/images/105483066/750/562/image.jpg",
            ],
            [
                'code' => 'CH',
                'name' => 'Switzerland',
                'description' => 'Switzerland is a paradise of snow-capped Alps, pristine lakes, and charming villages, offering outdoor adventures, luxury experiences, and a peaceful, high-quality lifestyle.',
                'image' => 'https://maya.net/travel/wp-content/uploads/2024/10/Zermatt-and-the-Matterhorn-1024x576.png',

                'days' => 8,
                'price' => 3800,
                'rating' => 4.9,
                'blurb' => "Snow-capped Alps, crystal lakes and postcard villages for serene, high-quality escapes.",
                'top_image' => "https://maya.net/travel/wp-content/uploads/2024/10/Basel-1024x576.png",
            ],
            [
                'code' => 'IT',
                'name' => 'Italy',
                'description' => 'Italy enchants travelers with its rich art, historic landmarks, delicious cuisine, and stunning coastlines, from the romantic canals of Venice to the sun-kissed Amalfi coast.',
                'image' => 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/09/roma-1.jpg',

                'days' => 6,
                'price' => 2100,
                'rating' => 4.8,
                'blurb' => "Colosseum to coastlines — history, cuisine and dolce vita energy in every piazza.",
                'top_image' => "https://mymodernmet.com/wp/wp-content/uploads/2019/08/best-places-to-visit-in-italy-1.jpg",
            ],
            [
                'code' => 'JP',
                'name' => 'Japan',
                'description' => 'Japan is a perfect blend of ancient tradition and modern innovation, offering serene temples, futuristic cities, breathtaking cherry blossoms, and unique cultural experiences.',
                'image' => 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3lvdG98ZW58MHx8MHx8fDA%3D',

                'days' => 9,
                'price' => 4200,
                'rating' => 4.9,
                'blurb' => "Temple calm meets neon buzz — culture, food and nature in perfect balance.",
                'top_image' => "https://www.routeperfect.com/blog/wp-content/uploads/2023/08/top_9_experiences_and_places_to_visit_in_japan.jpeg",
            ],
            [
                'code' => 'GR',
                'name' => 'Greece',
                'description' => 'Greece enchants visitors with its sun-kissed islands, ancient ruins, and rich mythology, offering stunning beaches, vibrant culture, delicious cuisine, and unforgettable historical sites.',
                'image' => 'https://worldwildschooling.com/wp-content/uploads/2024/01/Small-Towns-in-Europe_Assos_Greece_SCStock_Adobe-Stock-Photo_427227583-1.jpg',

                'days' => 7,
                'price' => 1890,
                'rating' => 4.7,
                'blurb' => "Whitewashed islands, turquoise bays and sun-drenched ruins — the Aegean at its best.",
                'top_image' => "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4b8d3275ea480990/version/1696150441/best-places-to-visit-in-greece-zakynthos.jpg",
            ],
        ]);
    }
}
