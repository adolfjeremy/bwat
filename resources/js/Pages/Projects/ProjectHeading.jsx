import React, { useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { Box, TextField, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";

function ProjectHeading() {
    const { item } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, errors } = useForm({
        heading: item.heading,
        short_description: item.short_description,
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("project-heading-update"), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: () => {
                console.log(errors);
                toggleSpinner(false);
            },
        });
    };
    return (
        <Layouts heading="Project - Heading">
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
                        label="Short Description"
                        variant="outlined"
                        name="short_description"
                        sx={{ width: "100%" }}
                        value={data.short_description}
                        required
                        onChange={(e) =>
                            setData("short_description", e.target.value)
                        }
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

export default ProjectHeading;
