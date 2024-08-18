import React, { useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { Box, TextField, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";

function About() {
    const { item } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post } = useForm({
        heading: item.heading,
        description: item.description,
        image: item.image,
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("about-update"), {
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
        <Layouts heading="Home Page - About Section">
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
                        required
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

export default About;
