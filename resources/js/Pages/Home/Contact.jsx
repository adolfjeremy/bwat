import React, { useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { Box, TextField, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";

function Contact() {
    const { item } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post } = useForm({
        heading: item.heading,
        button: item.button,
        url: item.url,
        description: item.description,
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("contact-update"), {
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
                        label="Button"
                        variant="outlined"
                        name="button"
                        sx={{ width: "100%" }}
                        value={data.button}
                        required
                        onChange={(e) => setData("button", e.target.value)}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Contact Url"
                        variant="outlined"
                        name="url"
                        sx={{ width: "100%" }}
                        value={data.url}
                        required
                        onChange={(e) => setData("url", e.target.value)}
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

export default Contact;
