import React, { useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { Box, TextField, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";

function ProjectCompletion() {
    const { item } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post } = useForm({
        heading: item.heading,
        project_completed: item.project_completed,
        description: item.description,
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("project-completed-update"), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
        });
    };
    return (
        <Layouts heading="Home Page - Project Completion">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <form
                    onSubmit={onHandleSubmit}
                    style={{
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 20,
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Heading"
                        variant="outlined"
                        name="heading"
                        sx={{ width: "100%" }}
                        value={data.heading}
                        required
                        onChange={(e) => setData("heading", e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Project Completed"
                        variant="outlined"
                        name="project_completed"
                        sx={{ width: "100%" }}
                        value={data.project_completed}
                        required
                        onChange={(e) =>
                            setData("project_completed", e.target.value)
                        }
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        minRows={4}
                        sx={{ mt: 2, width: "100%" }}
                        name="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    />
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        name="image"
                        onChange={(e) => setData("image", e.target.files[0])}
                        type="file"
                        sx={{ width: "100%", mt: 2 }}
                    />
                    <Button
                        variant="contained"
                        component="button"
                        type="submit"
                    >
                        Save
                    </Button>
                </form>
            </Box>
        </Layouts>
    );
}

export default ProjectCompletion;
