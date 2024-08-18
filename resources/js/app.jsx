import "./bootstrap";
import "../css/app.css";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import SpinnerContextProvider from "./Context/SpinnerContext";
import AlertContextProvider from "./Context/AlertContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <SpinnerContextProvider>
                <AlertContextProvider>
                    <App {...props} />
                </AlertContextProvider>
            </SpinnerContextProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
