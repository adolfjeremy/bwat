@extends('layouts.app')

@section('meta')
    <meta name="description" content="{{ $seo->description }}">
    <meta property="og:title" content="{{ $seo->title }}">
    <meta name="keywords" content="{{ $seo->keyword }}">
    <link rel="canonical" href="https://bwarchitecteam.id/">
    <title>{{ $seo->title }}</title>
@endsection

@section('page-style')
    @vite(['resources/sass/home.scss',])
@endsection

@section('content')
    <section class="hero pt-4">
        <div class="container-fluid custom-padding">
            <div class="row pt-3 pb-3 d-flex align-items-end justify-content-between">
                <div class="col-12 col-md-6 d-flex align-items-end">
                    <h1>{{ $tag->tag }}</h1>
                </div>
                <div class="col-12 col-md-4 mt-3 mt-md-0 d-flex align-items-end">
                    <p>
                        {{ $tag->short_description }}
                    </p>
                </div>
                <div class="col-12 col-md-4 mt-3 mt-md-0 d-flex d-md-none align-items-end">
                    <a href="{{ $contact->url }}" target="_blank" rel="noopener noreferer" class="btn btn-sm btn-cust mt-3">
                        {{ $contact->button }}
                    </a>
                </div>
            </div>
            <div class="row projects_slider mt-3">
                @foreach ($sliders as $item)
                    <div class="img_container">
                        <img src="{{ asset("storage/" . $item->image) }}" alt="{{ $item->alt }}" class="w-100">
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <section class="py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-1">
                    <h2>{{ $about->heading }}</h2>
                    <p class="stat_desc">
                        {{ $about->description }}
                    </p>
                </div>
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center mt-4 mt-md-0">
                    <img src="{{ asset("storage/" . $about->image) }}" alt="cool house" class="w-100">
                </div>
            </div>
        </div>
    </section>
    <section class="project_stat py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                    <img src="{{ asset("storage/" . $completed->image) }}" alt="cool house" class="w-100">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-1">
                    <p class="stat">{{ $completed->project_completed }}</p>
                    <h2>{{ $completed->heading }}</h2>
                    <p class="stat_desc">
                        {{ $completed->description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
    {{-- <section class="expertise py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img src="/assets/images/coba.png" alt="cool house" class="w-100">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-1">
                    <h2>we build your dream building</h2>
                    <p class="stat_desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Excepturi quo necessitatibus architecto odit odio quas
                        eveniet animi inventore exercitationem nostrum placeat
                        quam cupiditate, in non fuga voluptatibus eum, laborum
                    </p>
                    <ul class="mt-2">
                        <li>Affordable Cost</li>
                        <li>Highly Experience</li>
                        <li>full project delivery</li>
                        <li>custom modern design</li>
                        <li>best interior choice</li>
                    </ul>
                    <a href="{{ route("home") }}" class="btn btn-sm btn-cust">
                        Show More
                    </a>
                </div>
            </div>
        </div>
    </section> --}}
    <section class="projects py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 text-center text-md-start col-md-9 d-flex align-items-center justify-content-between justify-content-md-start">
                    <h2>Our Projects <br> We Worked On</h2>
                    <a href="{{ route('projects') }}" class="btn btn-link p-0 d-block d-md-none">See all projects</a>
                </div>
                <div class="col-12 col-md-3 text-md-end text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat illo excepturi rerum fuga rem eius unde.</p>
                    <a href="{{ route('projects') }}" class="btn btn-link p-0 d-none d-md-block text-end">See all projects</a>
                </div>
                
            </div>
            <div class="row mt-5">
                @foreach ($projects as $item)
                    <a href="{{ route("project-detail", $item->slug) }}" class="col-4 image_wrapper position-relative">
                    <div class="image_overlay d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-up-right-circle-fill position-relative"></i>
                    </div>
                    <img src="{{ asset("storage/" . $item->thumbnail) }}" alt="" class="w-100">
                </a>
                @endforeach
            </div>
        </div>
    </section>
    <section class="contact position-relative py-5">
        <div class="image_overlay"></div>
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 py-5 position-relative text-center d-flex flex-column align-items-center justify-content-center gap-2">
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

@push('addon-script')
@vite(['resources/js/projectSlider.js'])
@endpush