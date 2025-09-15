<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('offers', function (Blueprint $table) {
            $table->text('hero_image')->nullable();
            $table->text('description')->nullable();
            $table->integer('days')->nullable();
            $table->integer('max_group')->nullable();
            $table->date('valid_until')->nullable();
            $table->json('highlights')->nullable();
            $table->json('gallery')->nullable();
            $table->json('itinerary')->nullable();
            $table->json('included')->nullable();
            $table->json('features')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('offers', function (Blueprint $table) {
            $table->dropColumn([
                'hero_image',
                'description',
                'days',
                'max_group',
                'valid_until',
                'highlights',
                'gallery',
                'itinerary',
                'included',
                'features',
            ]);
        });
    }
};
