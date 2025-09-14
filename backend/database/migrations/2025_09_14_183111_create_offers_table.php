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
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('image');
            $table->integer('activities')->default(0);
            $table->integer('tours')->default(0);
            $table->decimal('price', 10, 2)->default(0);
            $table->string('badge')->nullable(); // p.sh. "-20%", "Top"
            $table->decimal('rating', 2, 1)->default(0); // p.sh. 4.8
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offers');
    }
};
