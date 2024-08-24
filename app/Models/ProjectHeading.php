<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectHeading extends Model
{
    protected $fillable = [
        'heading', 'short_description'
    ];
}
