<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectSeo extends Model
{
    protected $fillable = [
        'title', 'keyword', 'description'
    ];
}
