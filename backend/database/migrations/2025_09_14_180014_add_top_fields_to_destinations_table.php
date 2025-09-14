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
        Schema::table('destinations', function (Blueprint $table) {
            // Fushat për Hero Section
            $table->string('hero_image')->nullable();
            $table->text('hero_description')->nullable();

            // Fushat për Top Destinations Section
            $table->string('top_image')->nullable();
            $table->text('top_blurb')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->dropColumn([
                'hero_image',
                'hero_description',
                'top_image',
                'top_blurb',
            ]);
        });
    }
};
