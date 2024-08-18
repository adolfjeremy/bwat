<header class="navbar">
    <nav class="container-fluid custom-padding">
        <a class="navbar-brand" href="#">
            <img src="/assets/images/logo.png" alt="Bootstrap" width="80">
        </a>
        <button class="hamburger d-block d-xl-none" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <span class="inner-line"></span>
        </button>
        <ul class="d-xl-flex d-none gap-4 link_list">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="{{ route("home") }}">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route("projects") }}">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
            </li>
        </ul>
    </nav>
    <div class="mobile_nav_overlay d-xl-none"></div>
    <div class="mobile_nav d-xl-none">
        <div class="d-flex flex-column align-items-center justify-content-center gap-3">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Work</a>
            <a class="nav-link" href="#">Service</a>
        </div>
    </div>

</header>
