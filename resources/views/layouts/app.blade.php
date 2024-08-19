<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @yield('meta')
    @vite(['resources/sass/app.scss'])
    @yield('page-style')
    <title>Document</title>
</head>
<body>
    @include('components.header')
    <main>
        @yield('content')
    </main>
    @include('components.footer')
    @stack('prepend-script')
    @vite(['resources/js/sideBar.js'])
    @stack('addon-script')
</body>
</html>
