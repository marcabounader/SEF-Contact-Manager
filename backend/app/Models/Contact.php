<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use TarfinLabs\LaravelSpatial\Casts\LocationCast;
use TarfinLabs\LaravelSpatial\Traits\HasSpatial;

class Contact extends Model
{
    use HasSpatial;

    protected $fillable = [
        'user_id',
        'name',
        'phone_number',
        'coordinates',
    ];
    
    protected $casts = ['coordinates'=>LocationCast::class];
}
