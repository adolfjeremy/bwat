import React, { useState, useContext } from "react";
import { router } from "@inertiajs/react";
import { Box, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function ImageItem({ image, id }) {
    const [isHover, setHover] = useState(false);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const onHandleDelete = () => {
        router.delete(route("slider-delete", id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: () => {
                toggleSpinner(false);
            },
        });
    };

    return (
        <Box
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            sx={{
                position: "relative",
                cursor: "pointer",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: isHover
                        ? "rgba(254, 254, 254, 0.3)"
                        : "transparent",
                    zIndex: 10,
                }}
            ></Box>
            <img
                src={`https://bwarchitecteam.id/storage/${image}`}
                className="w-100 position-relative"
            />
            <IconButton
                onClick={onHandleDelete}
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 10,
                    zIndex: 11,
                    display: isHover ? "block" : "none",
                }}
                aria-label="delete"
            >
                <CancelIcon sx={{ color: "red" }} />
            </IconButton>
        </Box>
    );
}

export default ImageItem;
