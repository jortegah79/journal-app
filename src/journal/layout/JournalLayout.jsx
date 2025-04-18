import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components/";


const drawerWidth = 300;
export const JournalLayout = ({ children }) => {

    return (
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster"
        >

            <NavBar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />

            <Box component={'main'}
                sx={{ flexGrow: 1, p: 2 }}>

                <Toolbar />

                {children}

            </Box>


        </Box>
    );
}