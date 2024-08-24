<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Header;
use App\Models\Contact;
use App\Models\HomeSeo;
use App\Models\Project;
use App\Models\TagLine;
use App\Models\ImageSlider;
use Illuminate\Http\Request;
use App\Models\ProjectCompletion;
use App\Models\ProjectHeading;

class HomeController extends Controller
{
    public function index()
    {
        $tag = TagLine::findOrFail(1);
        $sliders = ImageSlider::all();
        $completed = ProjectCompletion::findOrFail(1);
        $about = About::findOrFail(1);
        $contact = Contact::findOrFail(1);
        $projects = Project::latest()->take(3)->get();
        $header = Header::findOrFail(1);
        $projectHeading = ProjectHeading::findOrFail(1);
        $seo = HomeSeo::findOrFail(1);
        return View("pages.home", [
            "tag" => $tag,
            "sliders" => $sliders,
            "completed" => $completed,
            "about" => $about,
            "contact" => $contact,
            "projects" => $projects,
            "header" => $header,
            "projectHeading" => $projectHeading,
            "seo" => $seo,
        ]);
    }
}
