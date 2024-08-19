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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string("thumbnail")->nullable();
            $table->string("name");
            $table->string("year");
            $table->longText("about");
            $table->string("about_image");
            $table->longText("problem");
            $table->string("problem_image");
            $table->longText("solution");
            $table->string("solution_image");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
