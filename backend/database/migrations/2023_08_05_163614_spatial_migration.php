<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use TarfinLabs\LaravelSpatial\Migrations\SpatialMigration;

return new class extends SpatialMigration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            // $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->integer('phone_number');
            $table->point('coordinates',0);
            $table->timestamps();
            // $table->foreign('user_id')->references('id')->on('users');
            $table->spatialIndex('coordinates');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
