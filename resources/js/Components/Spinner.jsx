import React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Spinner() {
    return (
        <Box
            sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(21, 21, 21, 0.2)",
                zIndex: 1400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
}

export default Spinner;
