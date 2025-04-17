import { CircularProgress, Grid2, Typography } from "@mui/material"



export const CheckingAuth = () => {

    return (
        <Grid2 container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent={"center"}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>
            <Grid2 item 
            direction="column" 
            alignItems="center"
            justifyContent="center"
            >
                
                <CircularProgress color="warning" sx={{marginLeft:"20px"}}/>
                <Typography fontSize="18px"textAlign='center' color="warning">
                    Cargando...
                </Typography>
            </Grid2>
        </Grid2>
    );
}