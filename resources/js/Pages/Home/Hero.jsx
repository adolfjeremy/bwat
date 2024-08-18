import React, { useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import Layouts from "@/Layouts/Layouts";
import ImageUpload from "./ImageUpload";
import { Box, TextField } from "@mui/material";
import ImageItem from "./ImageItem";

function Hero() {
    const { tagLine, sliders } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post } = useForm({
        tag: tagLine.tag,
        short_description: tagLine.short_description,
    });
    const onHandleOnBlur = (e) => {
        e.preventDefault();
        post(route("hero-post"), {
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
        <Layouts heading="Home Page - Hero Section">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                    id="outlined-basic"
                    label="Tag Line"
                    variant="outlined"
                    name="tag"
                    value={data.tag}
                    onChange={(e) => setData("tag", e.target.value)}
                    onBlur={onHandleOnBlur}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Short Description"
                    multiline
                    minRows={4}
                    sx={{ mt: 2 }}
                    name="short_description"
                    value={data.short_description}
                    onChange={(e) =>
                        setData("short_description", e.target.value)
                    }
                    onBlur={onHandleOnBlur}
                />
                <ImageUpload />
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows: "1fr",
                        gap: "1rem",
                        mt: 1,
                    }}
                >
                    {sliders.map((slider) => (
                        <ImageItem
                            image={slider.image}
                            key={slider.id}
                            id={slider.id}
                        />
                    ))}
                </Box>
            </Box>
        </Layouts>
    );
}

export default Hero;
