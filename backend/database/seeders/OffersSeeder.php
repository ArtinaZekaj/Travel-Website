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
        Offer::insert([
            [
                'title' => 'Italy',
                'slug' => 'italy',
                'image' => 'https://www.yesmilano.it/sites/default/files/styles/testata_full/public/pagina_standard/copertina/181/196/Depositphotos_150847914_xl-2015_duomo_di_milano_copertina.jpg?itok=RxNexRMO',
                'activities' => 8,
                'tours' => 3,
                'price' => 1290,
                'badge' => '-20%',
                'rating' => 4.7,
            ],
            [
                'title' => 'Greece',
                'slug' => 'greece',
                'image' => 'https://static.prod.r53.tablethotels.com/media/ecs/global/michelin-articles/Missing/Lead-Zante.jpg',
                'activities' => 63,
                'tours' => 9,
                'price' => 2490,
                'badge' => 'Top',
                'rating' => 4.9,
            ],
            [
                'title' => 'Switzerland',
                'slug' => 'switzerland',
                'image' => 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7510fc3d-ce85-4200-a7cf-49d6f22ea9e7.jpg?crop=4999%2C2812%2C0%2C0',
                'activities' => 14,
                'tours' => 5,
                'price' => 1890,
                'badge' => '-15%',
                'rating' => 4.8,
            ],
        ]);
    }
}
