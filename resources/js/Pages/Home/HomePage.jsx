import React from "react";
import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import BoxItem from "@/Components/BoxItem";

function HomePage() {
    const theme = useTheme();

    return (
        <Layouts heading="Home Page">
            <Head title="Dashboard" />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "1fr",
                    gap: "1rem",
                }}
            >
                <BoxItem text="SEO" route={route("dashboard-home")} />
                <BoxItem text="Hero" route={route("home-hero")} />
                <BoxItem text="About" route={route("home-about")} />
                <BoxItem
                    text="Project Completed"
                    route={route("home-project-completed")}
                />
            </Box>
        </Layouts>
    );
}

export default HomePage;
