<header class="navbar">
    <nav class="container-fluid custom-padding">
        <a class="navbar-brand" href="{{ route("home") }}">
            <img src="{{ asset("storage/" . $header->logo) }}" alt="BWAT" width="120">
        </a>
        <button class="hamburger d-block d-xl-none" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <span class="inner-line"></span>
        </button>
        <ul class="d-xl-flex d-none gap-4 link_list">
            <li class="nav-item">
                <a class="nav-link{{ (request()->is('/') ? " active" : "") }}" aria-current="page" href="{{ route("home") }}">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ (request()->is('projects*') ? " active" : "") }}" href="{{ route("projects") }}">Projects</a>
            </li>
            <li class="nav-item">
                <a href="{{ $contact->url }}" target="_blank" rel="noopener noreferer" class="btn btn-sm btn-cust">
                    {{ $contact->button }}
                </a>
            </li>
        </ul>
    </nav>
    <div class="mobile_nav_overlay d-xl-none"></div>
    <div class="mobile_nav d-xl-none">
        <div class="d-flex flex-column align-items-center justify-content-center gap-3">
            <a class="nav-link{{ (request()->is('/') ? " active" : "") }}" aria-current="page" href="{{ route("home") }}">Home</a>

            <a class="nav-link{{ (request()->is('projects*') ? " active" : "") }}" href="{{ route("projects") }}">Projects</a>
        </div>
    </div>

</header>
