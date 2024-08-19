@extends('layouts.app')

@section('page-style')
@vite(['resources/sass/home.scss',])
@endsection

@section('content')
<section class="project_hero" style="background-image: url({{ asset("storage/" . $item->thumbnail) }})"></section>
<section class="project_description mt-5 py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 d-flex flex-column align-items-start justify-content-center">
                <h1>About The Project</h1>
                <p>
                    {{ $item->about }}
                </p>
            </div>
            <div class="col-12 col-md-6 d-flex flex-column align-items-end justify-content-center mt-5 mt-md-0">
                <img src="{{ asset("storage/" . $item->about_image) }}" alt="" class="w-100">
            </div>
        </div>
        <div class="row mt-5 py-5">
            <div class="col-md-5">
                <div>
                    <img src="{{ asset("storage/" . $item->solution_image) }}" alt="" class="w-100">
                </div>
                <div class="mt-5">
                    <h2>Solution</h2>
                    <p>{{ $item->solution }}</p>
                </div>
            </div>
            <div class="col-md-7 mt-5">
                <div>
                    <h2>Problem</h2>
                    <p>{{ $item->problem }}</p>
                </div>
                <div class="mt-5">
                    <img src="{{ asset("storage/" . $item->problem_image) }}" alt="" class="w-100">
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contact position-relative py-5">
    <div class="image_overlay"></div>
    <div class="container-fluid custom-padding">
        <div class="row">
            <div class="col-12 py-5 position-relative d-flex flex-column align-items-center justify-content-center gap-2">
                <h2>{{ $contact->heading }}</h2>
                <p>{{ $contact->description }}</p>
                <a href="{{ $contact->url }}" target="_blank" rel="noopener noreferer" class="btn btn-sm btn-cust mt-3">
                    {{ $contact->button }}
                </a>
            </div>
        </div>
    </div>
</section>


@endsection
