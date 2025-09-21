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
        Schema::create('tour_details', function (Blueprint $table) {
            $table->id();
            $table->string('category_slug', 100);
            $table->string('destination', 150);
            $table->string('hero_title', 255);
            $table->text('hero_image');
            $table->decimal('price', 10, 2);
            $table->string('days', 50);
            $table->decimal('rating', 3, 1); 
            $table->text('overview');

            // JSON columns
            $table->json('highlights')->nullable();
            $table->json('gallery')->nullable();
            $table->json('location')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_details');
    }
};
