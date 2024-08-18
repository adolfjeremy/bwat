import React, { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Modal, Typography, Button, TextField } from "@mui/material";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function ImageUpload() {
    const [openModal, setOpenModal] = useState(false);

    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, reset, errors } = useForm({
        image: "",
        alt: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("slider-post"),
            {
                onStart: () => {
                    toggleSpinner(true);
                },
                onSuccess: () => {
                    reset();
                    setOpenModal(false);
                    toggleSpinner(false);
                    toggleAlert(true);
                },
                onError: () => {
                    toggleSpinner(false);
                    console.log(errors);
                },
            },
            { forceFormData: true }
        );
    };
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 3,
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: 0,
                }}
            >
                Image Slider
            </Typography>
            <Button
                onClick={() => setOpenModal(true)}
                variant="contained"
                component="label"
            >
                Upload File
            </Button>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        mb={3}
                    >
                        Select Image
                    </Typography>
                    <form
                        onSubmit={onHandleSubmit}
                        style={{
                            display: "flex",
                            alignItems: "start",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 20,
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            name="image"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                            type="file"
                            sx={{ width: "100%" }}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Alt Text"
                            variant="outlined"
                            name="alt"
                            value={data.alt}
                            onChange={(e) => setData("alt", e.target.value)}
                            required
                            sx={{ width: "100%" }}
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
            </Modal>
        </Box>
    );
}

export default ImageUpload;
