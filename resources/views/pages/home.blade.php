@extends('layouts.app')

@section('page-style')
    @vite(['resources/sass/home.scss',])
@endsection

@section('content')
    <section class="hero">
        <div class="container-fluid custom-padding">
            <div class="row pt-3 pb-3">
                <div class="col-8 d-flex align-items-end">
                    <h1>Explore Our<br>Architectural Legacy</h1>
                </div>
                <div class="col-4 d-flex align-items-end">
                    <p>
                        We are thrilled with the outcome of the project and the level of service
                        provided by your team. Your expertise are a credit to your organization.
                    </p>
                </div>
            </div>
            <div class="row projects_slider mt-3">
                <div class="img_container">
                    <img src="/assets/images/1.png" alt="buildings" class="w-100">
                </div>
                <div class="img_container">
                    <img src="/assets/images/2.png" alt="buildings" class="w-100">
                </div>
                <div class="img_container">
                    <img src="/assets/images/3.png" alt="buildings" class="w-100">
                </div>
                <div class="img_container">
                    <img src="/assets/images/1.png" alt="buildings" class="w-100">
                </div>
                <div class="img_container">
                    <img src="/assets/images/2.png" alt="buildings" class="w-100">
                </div>
                <div class="img_container">
                    <img src="/assets/images/3.png" alt="buildings" class="w-100">
                </div>
            </div>
        </div>
    </section>
    <section class="project_stat py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-1">
                    <p class="stat">15K</p>
                    <h2>Project Completed</h2>
                    <p class="stat_desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Excepturi quo necessitatibus architecto odit odio quas
                        eveniet animi inventore exercitationem nostrum placeat
                        quam cupiditate, in non fuga voluptatibus eum, laborum
                        beatae.Doloremque impedit nemo vitae consequuntur tempore
                        fugit ullam aperiam labore in, fugiat, temporibus unde nihil
                    </p>
                </div>
                <div class="col-12 col-md-6">
                    <img src="/assets/images/projects.jpg" alt="cool house" class="w-100">
                </div>
            </div>
        </div>
    </section>
    <section class="expertise py-5">
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
    </section>
    <section class="py-5">
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-1">
                    <h2>About Us</h2>
                    <p class="stat_desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Excepturi quo necessitatibus architecto odit odio quas
                        eveniet animi inventore exercitationem nostrum placeat
                        quam cupiditate, in non fuga voluptatibus eum, laborum
                        beatae.Doloremque impedit nemo vitae consequuntur tempore
                        fugit ullam aperiam labore in, fugiat, temporibus unde nihil
                        <br>
                        quam cupiditate, in non fuga voluptatibus eum, laborum
                        beatae.Doloremque impedit nemo vitae consequuntur tempore
                    </p>
                    <a href="{{ route("home") }}" class="btn btn-sm btn-cust mt-3">
                        Show More
                    </a>
                </div>
                <div class="col-12 col-md-6">
                    <img src="/assets/images/about-img.jpg" alt="cool house" class="w-100">
                </div>
            </div>
        </div>
    </section>
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
    <section class="contact position-relative py-5">
        <div class="image_overlay"></div>
        <div class="container-fluid custom-padding">
            <div class="row">
                <div class="col-12 py-5 position-relative d-flex flex-column align-items-center justify-content-center gap-2">
                    <h2>Engaged with our Expert Architects</h2>
                    <p>Schedule a consultation Today</p>
                    <a href="{{ route("home") }}" class="btn btn-sm btn-cust mt-3">
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('addon-script')
@vite(['resources/js/projectSlider.js'])
@endpush