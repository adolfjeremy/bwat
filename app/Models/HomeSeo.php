<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeSeo extends Model
{
    protected $fillable = [
        'title', 'keyword', 'description'
    ];
}
