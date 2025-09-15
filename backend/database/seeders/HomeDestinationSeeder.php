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
                //Home section :
                'code' => 'XK',
                'name' => 'Kosovo',
                'description' => 'Kosovo, the heart of the Balkans, captivates visitors with its rich history, vibrant culture, and stunning natural landscapes, from rolling hills to majestic mountains.',
                'image' => 'https://barakat.travel/wp-content/uploads/2024/09/Kosovo.jpg',

                // Destination Page:
                'days' => 5,
                'price' => 1290,
                'rating' => 4.6,
                'blurb' => "Breathtaking mountains, vibrant cafés and welcoming towns across the Balkans’ youngest country.",
                'top_image' => "https://lp-cms-production.imgix.net/2019-06/e228bf3be784ffff7a338ec8d9167d30-pristina.jpg",
                'gallery' => json_encode([
                    "https://funkytours.com/wp-content/uploads/2022/03/Radavac-Small-Waterfall-scaled-e1647256329488.jpg",
                    "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/e7966d196283d0391d91da3a84df1a529f72baed5487e667ecb0144282048684.jpg",
                    "https://i0.wp.com/yourlastborders.com/wp-content/uploads/2023/04/istockphoto-1202554464-170667a.jpg",
                    "https://i0.wp.com/www.bad-ems.info/wp-content/uploads/2024/05/aim_19516_1.jpg",
                ]),
            ],
            [
                //Home section :
                'code' => 'US',
                'name' => 'USA',
                'description' => 'The United States offers a breathtaking variety of experiences, from iconic cities like New York and Los Angeles to majestic national parks, world-class entertainment, and diverse cultures.',
                'image' => 'https://www.pettitts.co.uk/img/containers/assets/destinations/2-north-america/1-usa/main-pages/usa-guides/a-guide-to-the-best-cities-in-the-usa/nashville.webp/b0656ccbdbf0912c21ed2194a058316d/nashville.webp',

                 // Destination Page:
                'days' => 7,
                'price' => 2490,
                'rating' => 4.7,
                'blurb' => "Iconic cities and national parks — from NYC skylines to the Grand Canyon’s vast horizons.",
                'top_image' => "https://media.timeout.com/images/105483066/750/562/image.jpg",
                'gallery' => json_encode([
                    "https://blog.thomascook.in/wp-content/uploads/2017/11/Untitled-design4-1.png",
                    "https://theplanetd.com/images/places-to-visit-in-the-usa-glacier-national-park.jpg",
                    "https://gofargrowclose.com/wp-content/uploads/2022/02/arches-national-park-1821072_1280-1024x682.jpg",
                    "https://cdn.thecoolist.com/wp-content/uploads/2022/01/Beautiful-Places-in-Washington-Leavenworth.png",
                ]),
            ],
            [
                //Home section :
                'code' => 'CH',
                'name' => 'Switzerland',
                'description' => 'Switzerland is a paradise of snow-capped Alps, pristine lakes, and charming villages, offering outdoor adventures, luxury experiences, and a peaceful, high-quality lifestyle.',
                'image' => 'https://maya.net/travel/wp-content/uploads/2024/10/Zermatt-and-the-Matterhorn-1024x576.png',

                // Destination Page:
                'days' => 8,
                'price' => 3800,
                'rating' => 4.9,
                'blurb' => "Snow-capped Alps, crystal lakes and postcard villages for serene, high-quality escapes.",
                'top_image' => "https://www.pocketwanderings.com/wp-content/uploads/2021/01/Spiez-1.jpg",
                'gallery' => json_encode([
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZempr9eWtCstr9lAMmR9dWX6r-Nhi6JA4g&s",
                    "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/11/20202626/lauterbrunnen.jpg",
                    "https://cdn.kimkim.com/files/a/images/a94d123082a599aae557566c1042aada9cdd9b11/original-4ac635884d7b2f3facc7506390382e0a.jpg",
                    "https://hblimg.mmtcdn.com/content/hubble/img/schengenvideoimg/mmt/activities/m_Zurich_7_l_667_1000.jpg",
                ]),
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
                'top_image' => "https://images.winalist.com/blog/wp-content/uploads/2024/07/23143542/AdobeStock_168616950-1-1500x872.jpeg",
                'gallery' => json_encode([
                    "https://greeking.me/images/blog/images/Italy-Vacations/Best-places-in-italy-in-the-summer/best-places-in-italy-in-the-summer-intro.jpg",
                    "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/z3ikeg3nyrxq27egpxsv",
                    "https://cdn-imgix.headout.com/mircobrands-content/image/8905dfb72b4133121831f081c4416acc-Duomo%20Florence.jpg",
                    "https://www.discoveryguidedtours.com/wp-content/uploads/2023/02/braies-lake-spring.jpg",
                ]),
            ],
            [
                'code' => 'JP',
                'name' => 'Japan',
                'description' => 'Japan is a perfect blend of ancient tradition and modern innovation, offering serene temples, futuristic cities, breathtaking cherry blossoms, and unique cultural experiences.',
                'image' => 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4',

                'days' => 9,
                'price' => 4200,
                'rating' => 4.9,
                'blurb' => "Temple calm meets neon buzz — culture, food and nature in perfect balance.",
                'top_image' => "https://cdn.britannica.com/57/121257-050-E005B523/Yokohama-Japan.jpg",
                'gallery' => json_encode([
                    "https://www.rivieratravel.co.uk/sites/default/files/styles/max_width_463/public/assetbank/TJ_GettyImages-504527734_Miyajima_Hiroshima_Japan.jpg.webp?itok=tB32EsFZ",
                    "https://assets.hldycdn.com/cdn-cgi/image/format=webp,width=1024,quality=75/articles/4eeb57_e6f835f83fa640c48d991d3f3b8c8017~mv2.jpg",
                    "https://media.tacdn.com/media/attractions-splice-spp-360x240/15/c1/01/da.jpg",
                    "https://ik.imagekit.io/tvlk/blog/2022/10/shutterstock_762780751.jpg",
                ]),
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
                'top_image' => "https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/trip-photos-g-to-i/gi/gi-banner-option-1.jpg",
                'gallery' => json_encode([
                    "https://www.davestravelpages.com/wp-content/uploads/2019/12/best-greek-cities.jpg",
                    "https://media.audleytravel.com/-/media/images/home/europe/greece/travel-guides/best-places-to-visit-in-greece/shutterstock_2290194769_acropolis_athens_3000x1000.jpg",
                    "https://www.historyhit.com/app/uploads/2020/07/Meteora.jpg",
                    "https://www.inspiringtravel.co.uk/other-shores/wp-content/uploads/2021/12/Kos.jpg",
                ]),
            ],
        ]);
    }
}
