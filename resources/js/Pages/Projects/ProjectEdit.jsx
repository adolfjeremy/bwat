import React, { useContext } from "react";
import { useForm, usePage, router } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { Box, TextField, Button } from "@mui/material";
import Layouts from "@/Layouts/Layouts";

function ProjectEdit() {
    const { item } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, errors } = useForm({
        name: item.name,
        year: item.year,
        about: item.about,
        problem: item.problem,
        solution: item.solution,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("project-update", item.id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: () => {
                console.log(errors);
                toggleSpinner(false);
            },
        });
    };

    const onHandleDelete = (e) => {
        e.preventDefault();
        router.delete(route("project-destroy", item.id), {
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
        <Layouts heading="Project List - Edit">
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
                        label="Project Name"
                        variant="outlined"
                        name="name"
                        sx={{ width: "100%" }}
                        value={data.name}
                        required
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Project Year"
                        variant="outlined"
                        name="year"
                        sx={{ width: "100%" }}
                        value={data.year}
                        required
                        onChange={(e) => setData("year", e.target.value)}
                    />
                    <Box
                        sx={{
                            width: "100%",
                            mt: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <TextField
                            id="thumbnail"
                            variant="outlined"
                            name="thumbnail"
                            onChange={(e) =>
                                setData("thumbnail", e.target.files[0])
                            }
                            type="file"
                        />
                    </Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="About Project"
                        multiline
                        minRows={4}
                        sx={{ mt: 2, width: "100%" }}
                        name="about"
                        value={data.about}
                        onChange={(e) => setData("about", e.target.value)}
                    />
                    <Box
                        sx={{
                            width: "100%",
                            mt: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <label htmlFor="about_image">About Image</label>
                        <TextField
                            id="about_image"
                            variant="outlined"
                            name="about_image"
                            onChange={(e) =>
                                setData("about_image", e.target.files[0])
                            }
                            type="file"
                        />
                    </Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Project Problem"
                        multiline
                        minRows={4}
                        sx={{ mt: 2, width: "100%" }}
                        name="problem"
                        value={data.problem}
                        onChange={(e) => setData("problem", e.target.value)}
                        required
                    />
                    <Box
                        sx={{
                            width: "100%",
                            mt: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <label htmlFor="problem_image">Problem Image</label>
                        <TextField
                            id="problem_image"
                            variant="outlined"
                            name="problem_image"
                            onChange={(e) =>
                                setData("problem_image", e.target.files[0])
                            }
                            type="file"
                        />
                    </Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Project Solution"
                        multiline
                        minRows={4}
                        sx={{ mt: 2, width: "100%" }}
                        name="solution"
                        value={data.solution}
                        onChange={(e) => setData("solution", e.target.value)}
                        required
                    />
                    <Box
                        sx={{
                            width: "100%",
                            mt: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <label htmlFor="solution_image">Solution Image</label>
                        <TextField
                            id="solution_image"
                            variant="outlined"
                            name="solution_image"
                            onChange={(e) =>
                                setData("solution_image", e.target.files[0])
                            }
                            type="file"
                        />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Button
                            variant="contained"
                            component="button"
                            type="submit"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={onHandleDelete}
                            color="error"
                            variant="contained"
                            component="button"
                        >
                            Delete
                        </Button>
                    </Box>
                </form>
            </Box>
        </Layouts>
    );
}

export default ProjectEdit;
