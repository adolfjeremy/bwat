@extends('layouts.app')

@section('page-style')
    @vite(['resources/sass/home.scss',])
@endsection

@section('content')
    <section class="projects py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-3">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat illo excepturi rerum fuga rem eius unde.</p>
                    <a href="{{ route('home') }}" class="btn btn-link p-0">See all projects</a>
                </div>
                <div class="col-9 d-flex align-item-center justify-content-end">
                    <h2>Our Projects <br> We Worked On</h2>
                </div>
            </div>
            <div class="row mt-3">
                <a href="{{ route("home") }}" class="col-4 image_wrapper position-relative">
                    <div class="image_overlay d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-up-right-circle-fill position-relative"></i>
                    </div>
                    <img src="/assets/images/tes.jpg" alt="" class="w-100">
                </a>
                <a href="{{ route("home") }}" class="col-4 image_wrapper position-relative">
                    <div class="image_overlay d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-up-right-circle-fill position-relative"></i>
                    </div>
                    <img src="/assets/images/tes.jpg" alt="" class="w-100">
                </a>
                <a href="{{ route("home") }}" class="col-4 image_wrapper position-relative">
                    <div class="image_overlay d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-up-right-circle-fill position-relative"></i>
                    </div>
                    <img src="/assets/images/tes.jpg" alt="" class="w-100">
                </a>
            </div>
        </div>
    </section>
@endsection

@push('addon-script')
@vite(['resources/js/projectSlider.js'])
@endpush