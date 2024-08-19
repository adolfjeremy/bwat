import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/app.jsx",
                "resources/sass/home.scss",
                "resources/sass/app.scss",
                "resources/sass/projects.scss",
                "resources/js/sideBar.js",
                "resources/js/projectSlider.js",
            ],
            refresh: true,
        }),
        react(),
    ],
});
