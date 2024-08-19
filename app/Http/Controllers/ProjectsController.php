<?php

namespace App\Http\Controllers;

use App\Models\Header;
use App\Models\Contact;
use App\Models\Project;
use App\Models\ProjectSeo;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index()
    {
        
        $projects = Project::latest()->get();
        $contact = Contact::findOrFail(1);
        $header = Header::findOrFail(1);
        $seo = ProjectSeo::findOrFail(1);
        return View("pages.projects", [
            "projects" => $projects,
            "contact" => $contact,
            "header" => $header,
            "seo" => $seo,
        ]);
    }

    public function show($id)
    {
        
        $item = Project::where('slug', $id)->firstOrFail();
        $contact = Contact::findOrFail(1);
        $header = Header::findOrFail(1);
        $seo = ProjectSeo::findOrFail(1);
        return View("pages.projectDetail", [
            "item" => $item,
            "contact" => $contact,
            "header" => $header,
            "seo" => $seo,
        ]);
    }
}
