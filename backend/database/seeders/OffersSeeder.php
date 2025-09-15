<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Offer;

class OffersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Offer::truncate(); 

        Offer::insert([
            [
                // 🟧 Offer Section (homepage preview)
                'title' => 'Italy',
                'slug' => 'italy',
                'image' => 'https://www.yesmilano.it/sites/default/files/styles/testata_full/public/pagina_standard/copertina/181/196/Depositphotos_150847914_xl-2015_duomo_di_milano_copertina.jpg?itok=RxNexRMO',
                'activities' => 8,
                'tours' => 3,
                'price' => 1290,
                'original_price' => 1920, // çmimi i plotë (para uljes)
                'badge' => '-20%',
                'rating' => 4.8,

                // 🟧 Offer Page
                'days' => 7,
                'max_group' => 12,
                'hero_image' => 'https://www.citalia.com/-/media/Bynder/Citalia-properties/Cities/Rome/Anantara-Palazzo-Naiadi/Views/Anantara-Palazzo-Naiadi-2023-Property-View-001-121923-Hybris.jpg',
                'description' => "Immerse yourself in Italy's rich cultural heritage with this carefully curated journey through Rome, Florence, and the Amalfi Coast.",
                'valid_until' => '2025-02-28',
                'highlights' => json_encode([
                    "Skip-the-line access to Vatican Museums and Sistine Chapel",
                    "Scenic Amalfi Coast drive with photo stops",
                    "Luxury 4-star hotel accommodations",
                    "Wine tasting in Chianti region",
                    "Cooking class in Tuscany",
                    "Gondola ride in Venice canals",
                    "Professional photography session",
                    "Private guided tours in Rome and Florence"
                ]),
                'gallery' => json_encode([
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513562913.jpg?k=848172ee98a9f2a9975c4bab6eb049cb273a91ac570887c976a834a87944f21f&o=",
                    "https://pro-static.h10hotels.com/gallery/T4D3/33_HPGPanoramicVeneziaTerraceRoom4.jpg",
                    "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2017/10/hotel-cala-di-volpe-sardinia.jpg",
                ]),
                'itinerary' => json_encode([
                    ["day" => "Day 1", "title" => "Arrival & welcome dinner", "text" => "Hotel check-in, short city walk, food tasting."],
                    ["day" => "Day 2", "title" => "City highlights with local guide", "text" => "Museums, landmarks, panorama viewpoints."],
                    ["day" => "Day 3", "title" => "Nature day trip", "text" => "Lakes / mountains, cable car or light hike."],
                    ["day" => "Days 4–7", "title" => "Mix & match experiences", "text" => "Free time, markets, optional activities."]
                ]),
                'included' => json_encode([
                    "Round-trip flights from major cities",
                    "4-star hotel accommodations (7 nights)",
                    "Daily breakfast and 4 gourmet dinners",
                    "Private transportation with driver",
                    "Professional English-speaking guide",
                    "All entrance fees and skip-the-line tickets",
                    "Cooking class and wine tastings",
                    "Travel insurance coverage"
                ]),
                'features' => json_encode([
                    "Limited to 12 travelers for intimate experience",
                    "Michelin-recommended restaurant reservations",
                    "Professional photographer for group photos",
                    "Exclusive after-hours museum access"
                ]),
            ],
            [
                // 🟧 Offer Section
                'title' => 'Greece',
                'slug' => 'greece',
                'image' => 'https://static.prod.r53.tablethotels.com/media/ecs/global/michelin-articles/Missing/Lead-Zante.jpg',
                'activities' => 10,
                'tours' => 6,
                'price' => 2490,
                'original_price' => 2990,
                'badge' => 'Top',
                'rating' => 4.9,

                // 🟧 Offer Page
                'days' => 6,
                'max_group' => 15,
                'hero_image' => 'https://www.tovima.com/wp-content/uploads/2024/02/13/Samos-scaled.jpg',
                'description' => "Discover the beauty of Greece from Santorini sunsets to Athens’ ancient ruins.",
                'valid_until' => '2025-07-30',
                'highlights' => json_encode([
                    "Santorini luxury villa stay",
                    "Acropolis private guided tour",
                    "Island hopping cruise",
                    "Greek cooking class",
                    "Sunset in Oia viewpoint",
                    "Ancient Agora & Plaka walk",
                    "Olive oil tasting",
                    "Beach day in Mykonos"
                ]),
                'gallery' => json_encode([
                    "https://cdn.mos.cms.futurecdn.net/nySheKZLwdtpuPYFbp8n7c.jpg",
                    "https://cdn.escapetravel.mk/static/hotels/stella-island-luxury-resort--spa/stella-island-luxury-resort--spa-3.jpg",
                    "https://www.pettitts.co.uk/img/containers/assets/destinations/4-europe/5-greece/itinerary-images/athens-thumb-.jpg/d772691975472ca0eb902bfac8d93684/athens-thumb-.webp",
                ]),
                'itinerary' => json_encode([
                    ["day" => "Day 1", "title" => "Athens arrival", "text" => "Check-in & dinner in Plaka."],
                    ["day" => "Day 2", "title" => "Acropolis & museums", "text" => "Private guide, free afternoon."],
                    ["day" => "Day 3", "title" => "Santorini ferry", "text" => "Cliff walk & sunset in Oia."],
                    ["day" => "Days 4–6", "title" => "Islands & beaches", "text" => "Cruise, beach time, cooking class."]
                ]),
                'included' => json_encode([
                    "Flights + hotel package",
                    "Daily breakfast",
                    "Private transportation"
                ]),
                'features' => json_encode([
                    "Exclusive after-hours museum access",
                    "Cooking class with local chef"
                ]),
            ],
            [
                // 🟧 Offer Section
                'title' => 'Switzerland',
                'slug' => 'switzerland',
                'image' => 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7510fc3d-ce85-4200-a7cf-49d6f22ea9e7.jpg',
                'activities' => 7,
                'tours' => 5,
                'price' => 2200,
                'original_price' => 2500,
                'badge' => '-15%',
                'rating' => 4.7,

                // 🟧 Offer Page
                'days' => 5,
                'max_group' => 10,
                'hero_image' => 'https://images.ctfassets.net/dk0lphwn7d80/4H1hrgLzqxWfNxi6Vpgfkj/a58a04697b7bdcf905ccdf894e30290b/BadruttPalace_SummerExt_8.jpg?fm=webp',
                'description' => "Explore the Swiss Alps with scenic train rides, mountain hikes, and luxury chalets.",
                'valid_until' => '2025-06-15',
                'highlights' => json_encode([
                    "Jungfraujoch train experience",
                    "Lake Geneva boat tour",
                    "Swiss chocolate & cheese tasting",
                    "Glacier viewpoint",
                    "Interlaken & Grindelwald",
                    "Lauterbrunnen waterfalls",
                    "Lucerne old town walk",
                    "Panoramic cable car"
                ]),
                'gallery' => json_encode([
                    "https://media-cdn.tripadvisor.com/media/photo-s/2d/16/0a/14/caption.jpg",
                    "https://www.indianholiday.com/wordpress/wp-content/uploads/2021/11/Zurich.jpg",
                    "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg",
                ]),
                'itinerary' => json_encode([
                    ["day" => "Day 1", "title" => "Zurich arrival", "text" => "Train to Interlaken, lakeside stroll."],
                    ["day" => "Day 2", "title" => "Jungfraujoch", "text" => "Scenic train, glacier & views."],
                    ["day" => "Day 3", "title" => "Lauterbrunnen", "text" => "Waterfalls & valley hike."],
                    ["day" => "Days 4–5", "title" => "Lucerne & Mt. Pilatus", "text" => "Old town & cable car."]
                ]),
                'included' => json_encode([
                    "Train tickets",
                    "Hotel accommodation",
                    "Daily breakfast"
                ]),
                'features' => json_encode([
                    "Panoramic cable car ride",
                    "Chocolate tasting workshop"
                ]),
            ],
        ]);
    }
}
