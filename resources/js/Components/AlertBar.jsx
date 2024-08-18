import React, { useContext } from "react";
import { usePage } from "@inertiajs/react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertContext } from "@/Context/AlertContext";

function AlertBar() {
    const { alertState, toggleAlert } = useContext(AlertContext);
    const { flashMessage } = usePage().props;
    console.log(flashMessage);

    return (
        <Snackbar
            open={alertState}
            autoHideDuration={6000}
            onClose={() => toggleAlert(false)}
        >
            <Alert
                onClose={() => toggleAlert(false)}
                severity={flashMessage.type}
                variant="filled"
                sx={{ width: "100%" }}
            >
                {flashMessage.message}
            </Alert>
        </Snackbar>
    );
}

export default AlertBar;
