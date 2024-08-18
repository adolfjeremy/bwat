<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectCompletion extends Model
{
    protected $fillable = [
        'heading', 'description', 'image', 'project_completed'
    ];
}
