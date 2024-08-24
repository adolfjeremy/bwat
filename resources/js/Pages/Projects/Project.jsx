import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";
import ProjectItem from "./ProjectItem";

function Project() {
    const { projects } = usePage().props;
    return (
        <Layouts heading="Project List">
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography>Project List</Typography>
                <Button
                    onClick={() => router.visit(route("project-create"))}
                    variant="contained"
                >
                    Add Project
                </Button>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "1fr",
                    gap: "1rem",
                    mt: 3,
                }}
            >
                {projects.map((project) => (
                    <ProjectItem
                        onHandleOnclick={() =>
                            router.visit(route("project-show", project.id))
                        }
                        name={project.name}
                        key={project.id}
                        id={project.id}
                    />
                ))}
            </Box>
        </Layouts>
    );
}

export default Project;
