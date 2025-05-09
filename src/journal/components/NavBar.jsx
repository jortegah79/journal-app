import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Box, Grid2, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";


export const NavBar = ({ drawerWidth }) => {
    const dispatch = useDispatch();
    const onLogout = () => {

        console.log("logout");
        dispatch(startLogout());

    }

    return (
        <AppBar position='fixed'
            sx={{ width: { sm: `calc( 100% - ${drawerWidth}px)` }, ml: { sm: `100% -${drawerWidth}px` } }}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>
                <Grid2 container
                    justifyContent='space-between'
                    alignItems="center"
                    sx={{ width: '100%' }}
                >
                    <Typography variant="h6" noWrap component={'div'}>JournalApp</Typography>
                    <IconButton color="error"
                        onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid2>
            </Toolbar>
        </AppBar>
    );

}