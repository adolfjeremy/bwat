import React, { useState, useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Layouts from "@/Layouts/Layouts";
import {
    Box,
    Typography,
    useTheme,
    Button,
    Modal,
    TextField,
} from "@mui/material";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function Project() {
    const { projects } = usePage().props;
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, reset } = useForm({
        name: "",
        year: "",
        thumbnail: null,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("project-post"), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
                reset();
                setOpenModal(false);
            },
        });
    };
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
                    <Box
                        key={project.id}
                        onClick={() =>
                            router.visit(route("project-show", project.id))
                        }
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: theme.palette.primary.main,
                            padding: "3rem 1rem",
                            cursor: "pointer",
                            transition: "300ms ease-in",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                            },
                        }}
                    >
                        <Typography color={theme.palette.common.white}>
                            {project.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Layouts>
    );
}

export default Project;
