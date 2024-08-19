import React, { useState, useContext } from "react";
import { router } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PagesIcon from "@mui/icons-material/Pages";
import HomeIcon from "@mui/icons-material/Home";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AlertBar from "@/Components/AlertBar";
import Spinner from "@/Components/Spinner";
import PentagonIcon from "@mui/icons-material/Pentagon";
import AdjustIcon from "@mui/icons-material/Adjust";
import WorkIcon from "@mui/icons-material/Work";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import TuneIcon from "@mui/icons-material/Tune";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";

const drawerWidth = 300;

function Layouts({ children, heading }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [open, setOpen] = useState(true);
    const [buka, setBuka] = useState(true);
    const { spinnerState } = useContext(SpinnerContext);
    const { alertState } = useContext(AlertContext);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <ListItem
                disablePadding
                onClick={() => router.visit(route("dashboard-header"))}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <ViewWeekIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logo" />
                </ListItemButton>
            </ListItem>
            <Divider />
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <PagesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => router.visit(route("home-hero"))}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <PentagonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Hero" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => router.visit(route("home-about"))}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <AdjustIcon />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() =>
                                router.visit(route("home-project-completed"))
                            }
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <WorkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project Completed" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => router.visit(route("home-contact"))}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <ContactPageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => router.visit(route("home-seo"))}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <TuneIcon />
                            </ListItemIcon>
                            <ListItemText primary="SEO" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItemButton onClick={() => setBuka(!buka)}>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                    {buka ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={buka} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() =>
                                router.visit(route("dashboard-project"))
                            }
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <FormatListNumberedRtlIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project List" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => router.visit(route("project-seo"))}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <TuneIcon />
                            </ListItemIcon>
                            <ListItemText primary="SEO" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {alertState && <AlertBar />}
            {spinnerState && <Spinner />}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {heading}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                        minHeight: "100vh",
                    },
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default Layouts;
