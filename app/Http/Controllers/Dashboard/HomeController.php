<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Models\About;
use App\Models\Contact;
use App\Models\TagLine;
use App\Models\ImageSlider;
use Illuminate\Http\Request;
use App\Models\ProjectCompletion;
use App\Http\Requests\AboutRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Http\Requests\TagLineRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ImageSliderRequest;
use App\Http\Requests\ProjectCompletionRequest;
use App\Models\Header;
use App\Models\HomeSeo;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/HomePage');
    }

    public function hero()
    {
        $tagLine = TagLine::findOrFail(1);
        $sliders = ImageSlider::all();
        return Inertia::render('Home/Hero', [
            "tagLine" => $tagLine,
            "sliders" => $sliders
        ]);
    }

    public function update(TagLineRequest $request)
    {
        $data = $request->validated();
        $tagLine = TagLine::findOrFail(1);
        $tagLine->update($data);
        return redirect()->back()->with([
            'message' => "Tag Line Saved successfully",
            'type' => 'success'
        ]);

    }

    public function sliderAdd(ImageSliderRequest $request)
    {
        $data = $request->validated();

        if($request->file('image'))
        {
            $data['image'] = $request->file('image')->store('image-slider');
        }
        ImageSlider::create($data);
        return redirect()->back()->with([
            'message' => "Image Slider Saved successfully",
            'type' => 'success'
        ]);
    }

    public function destroyImage($id)
    {
        $item = ImageSlider::findOrFail($id);
        Storage::delete($item->image);
        $item->delete();

        return redirect()->back()->with([
            'message' => "Image Slider deleted successfully",
            'type' => 'success'
        ]);;
    }

    public function about()
    {
        $item = About::findOrFail(1);
        return Inertia::render('Home/About', [
            "item" => $item
        ]);
    }

    public function aboutUpdate(AboutRequest $request)
    {
        $data = $request->validated();
        $about = About::findOrFail(1);
        if($request->file('image'))
        {
            if($request->oldImage)
            {
                Storage::delete($request->oldImage);
            }
            $data['image'] = $request->file('image')->store('about');
        }
        $about->update($data);
        return redirect()->back()->with([
            'message' => "About Section Saved successfully",
            'type' => 'success'
        ]);

    }

    public function projectCompletion()
    {
        $item = ProjectCompletion::findOrFail(1);
        return Inertia::render('Home/ProjectCompletion', [
            "item" => $item
        ]);
    }

    public function projectCompletedUpdate(ProjectCompletionRequest $request)
    {
        $data = $request->validated();
        $about = ProjectCompletion::findOrFail(1);
        if($request->file('image'))
        {
            if($request->oldImage)
            {
                Storage::delete($request->oldImage);
            }
            $data['image'] = $request->file('image')->store('project_completed');
        }
        $about->update($data);
        return redirect()->back()->with([
            'message' => "Section Saved successfully",
            'type' => 'success'
        ]);

    }

    public function contact()
    {
        $item = Contact::findOrFail(1);
        return Inertia::render('Home/Contact', [
            "item" => $item
        ]);
    }

    public function contactUpdate(ContactRequest $request)
    {
        $data = $request->validated();
        $contact = Contact::findOrFail(1);
        if($request->file('image'))
        {
            if($request->oldImage)
            {
                Storage::delete($request->oldImage);
            }
            $data['image'] = $request->file('image')->store('contact');
        }
        $contact->update($data);
        return redirect()->back()->with([
            'message' => "Contact section Saved successfully",
            'type' => 'success'
        ]);

    }

    public function seo()
    {
        $item = HomeSeo::findOrFail(1);
        return Inertia::render('Home/Seo', [
            "item" => $item
        ]);
    }
    public function seoUpdate(Request $request)
    {
        $data = $request->all();
        $item = HomeSeo::findOrFail(1);
        
        $item->update($data);
        return redirect()->back()->with([
            'message' => "SEO Saved successfully",
            'type' => 'success'
        ]);
    }

    public function header()
    {
        $item = Header::findOrFail(1);
        return Inertia::render('Header/Header', [
            "item" => $item
        ]);
    }

    public function headerUpdate(Request $request)
    {
        $data = $request->all();
        $contact = Header::findOrFail(1);
        if($request->file('logo'))
        {
            if($request->oldImage)
            {
                Storage::delete($request->oldImage);
            }
            $data['logo'] = $request->file('logo')->store('logo');
        }
        $contact->update($data);
        return redirect()->back()->with([
            'message' => "Header Saved successfully",
            'type' => 'success'
        ]);

    }
}
