import { Grid2, Typography } from "@mui/material"


export const AuthLayout = ({ children, title = '' }) => {

    return (

        <Grid2 container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent={"center"}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>
            <Grid2 item
                className="box-shadow"
                size={{ xs: 11, sm: 9, md: 6, lg: 4 }}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

                <Typography variant="h5">{title}</Typography>
                {children}
            </Grid2>
        </Grid2>
    );
}