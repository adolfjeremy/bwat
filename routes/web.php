<?php

use App\Http\Controllers\Dashboard\HomeController as DashboardHomeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get("/", [HomeController::class, 'index'])->name("home");
Route::get("/projects", [ProjectsController::class, 'index'])->name("projects");


Route::prefix('dashboard')
// ->middleware(['auth'])
->group(function() {
    Route::get("/home", [DashboardHomeController::class, 'index'])->name("dashboard-home");
    Route::get("/home/hero", [DashboardHomeController::class, 'hero'])->name("home-hero");
    Route::post("/home/hero", [DashboardHomeController::class, 'update'])->name("hero-post");
    Route::post("/home/image", [DashboardHomeController::class, 'sliderAdd'])->name("slider-post");
    Route::DELETE("/home/image/{id}", [DashboardHomeController::class, 'destroyImage'])->name("slider-delete");
    Route::get("/home/about", [DashboardHomeController::class, 'about'])->name("home-about");
    Route::post("/home/about", [DashboardHomeController::class, 'aboutUpdate'])->name("about-update");
    Route::get("/home/project-completed", [DashboardHomeController::class, 'projectCompletion'])->name("home-project-completed");
    Route::post("/home/project-completed", [DashboardHomeController::class, 'projectCompletedUpdate'])->name("project-completed-update");
    Route::get("/home/contact", [DashboardHomeController::class, 'contact'])->name("home-contact");
    Route::post("/home/contact", [DashboardHomeController::class, 'contactUpdate'])->name("contact-update");
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
// ->middleware(['auth', 'verified'])

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
