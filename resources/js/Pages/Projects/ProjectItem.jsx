import React from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
function ProjectItem({ onHandleOnclick, name, id }) {
    const theme = useTheme();

    return (
        <Box
            onClick={onHandleOnclick}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.primary.main,
                padding: "3rem 1rem",
                cursor: "pointer",
                transition: "300ms ease-in",
                position: "relative",
                "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                },
            }}
        >
            <Typography
                sx={{ textAlign: "center" }}
                color={theme.palette.common.white}
            >
                {name}
            </Typography>
        </Box>
    );
}

export default ProjectItem;
