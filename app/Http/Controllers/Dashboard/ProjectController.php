<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\ProjectSeo;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return Inertia::render('Projects/Project', [
            "projects" => $projects
        ]);
    }

    public function store(ProjectRequest $request)
    {
        $data = $request->validated();

        if($request->file('thumbnail'))
        {
            $data['thumbnail'] = $request->file('thumbnail')->store('project');
        }
        if($request->file('about_image'))
        {
            $data['about_image'] = $request->file('about_image')->store('project');
        }
        if($request->file('problem_image'))
        {
            $data['problem_image'] = $request->file('problem_image')->store('project');
        }
        if($request->file('solution_image'))
        {
            $data['solution_image'] = $request->file('solution_image')->store('project');
        }
        $data['slug'] = Str::slug($request->name);
        Project::create($data);
        return redirect(route("dashboard-project"))->with([
            'message' => "Project Saved successfully",
            'type' => 'success'
        ]);
    }

    public function show($id)
    {
        $item = Project::findOrFail($id);

        return Inertia::render('Projects/ProjectEdit', [
            "item" => $item
        ]);
    }

    public function update(ProjectRequest $request, $id)
    {
        $data = $request->validated();
        $project = Project::findOrFail($id);
        if($request->file('thumbnail'))
        {
            if($request->oldImage)
            {
                Storage::delete($request->oldImage);
            }
            $data['thumbnail'] = $request->file('thumbnail')->store('project');
        }
        $data['slug'] = Str::slug($request->name);
        $project->update($data);
        return redirect(route("dashboard-project"))->with([
            'message' => "Project Saved successfully",
            'type' => 'success'
        ]);

    }

    public function create()
    {
        return Inertia::render('Projects/ProjectCreate');
    }

    public function seo()
    {
        $item = ProjectSeo::findOrFail(1);
        return Inertia::render('Projects/Seo', [
            "item" => $item
        ]);
    }
    public function seoUpdate(Request $request)
    {
        $data = $request->all();
        $item = ProjectSeo::findOrFail(1);
        
        $item->update($data);
        return redirect()->back()->with([
            'message' => "SEO Saved successfully",
            'type' => 'success'
        ]);
    }
}
