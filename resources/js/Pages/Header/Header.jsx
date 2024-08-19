import React, { useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { Box, TextField, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";

function Header() {
    const { item } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post } = useForm({
        logo: null,
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("header-update"), {
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
        <Layouts heading="Website - Logo">
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
                    <Box
                        sx={{
                            width: "100%",
                            mt: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <label htmlFor="logo">Logo</label>
                        <TextField
                            id="logo"
                            variant="outlined"
                            name="logo"
                            onChange={(e) => setData("logo", e.target.files[0])}
                            type="file"
                        />
                    </Box>
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

export default Header;
