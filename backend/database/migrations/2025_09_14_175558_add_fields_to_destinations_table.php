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
            $table->integer('days')->default(7);
            $table->decimal('price', 10, 2)->default(0);
            $table->decimal('rating', 2, 1)->default(4.5);
            $table->text('blurb')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->dropColumn(['days', 'price', 'rating', 'blurb']);
        });
    }
};
