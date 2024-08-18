import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import { Typography } from "@mui/material";

export default function Dashboard({ auth }) {
    return (
        <Layouts>
            <Head title="Dashboard" />
            <Typography>Tes</Typography>
        </Layouts>
    );
}
