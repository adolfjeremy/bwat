import React from "react";
import { router } from "@inertiajs/react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material";

function BoxItem({ route, text }) {
    const theme = useTheme();
    return (
        <Box
            onClick={() => router.visit(route)}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.primary.main,
                padding: "2rem",
                cursor: "pointer",
                transition: "300ms ease-in",
                "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                },
            }}
        >
            <Typography
                color={theme.palette.common.white}
                sx={{ fontWeight: 500 }}
            >
                {text}
            </Typography>
        </Box>
    );
}

export default BoxItem;
