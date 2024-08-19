import React, { useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { Box, TextField, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";

function Seo() {
    const { item } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post } = useForm({
        title: item.title,
        keyword: item.keyword,
        description: item.description,
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("seo-project-update"), {
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
        <Layouts heading="Home Page - SEO">
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
                        label="Page Title"
                        variant="outlined"
                        name="title"
                        sx={{ width: "100%" }}
                        value={data.title}
                        required
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Page Keyword"
                        variant="outlined"
                        name="keyword"
                        sx={{ width: "100%" }}
                        value={data.keyword}
                        required
                        onChange={(e) => setData("keyword", e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Page Description"
                        variant="outlined"
                        name="description"
                        sx={{ width: "100%" }}
                        value={data.description}
                        required
                        onChange={(e) => setData("description", e.target.value)}
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

export default Seo;
