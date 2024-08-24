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
    <section class="projects py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 text-center text-md-start col-md-9 d-flex align-items-center justify-content-center justify-content-md-start">
                    <h2>Our Projects <br> We Worked On</h2>
                </div>
                <div class="col-12 col-md-3 text-md-end text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat illo excepturi rerum fuga rem eius unde.</p>
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
    <section class="contact position-relative py-5" style="background-image: url({{ asset("storage/" . $contact->image) }}>
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