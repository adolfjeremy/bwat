<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index()
    {
        
        $projects = Project::latest()->get();
        $contact = Contact::findOrFail(1);
        return View("pages.projects", [
            "projects" => $projects,
            "contact" => $contact,
        ]);
    }

    public function show($id)
    {
        
        $item = Project::where('slug', $id)->firstOrFail();
        $contact = Contact::findOrFail(1);
        return View("pages.projectDetail", [
            "item" => $item,
            "contact" => $contact,
        ]);
    }
}
