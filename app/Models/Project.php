<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'thumbnail', 'name', 'year','about', 'about_image', 'problem', 'problem_image', 'solution', 'solution_image', 'slug'
    ];
}
