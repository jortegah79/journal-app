import { Google } from "@mui/icons-material"
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startSignInWithMailAndPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const formData = {
    email: 'fernando@gmail.com',
    password: '123456'
};

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth)

    const { email, password, onInputChange } = useForm(formData);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startSignInWithMailAndPassword(email, password));

    }
    const onGoogleSignIn = (e) => {
        e.preventDefault();
        dispatch(startGoogleSignIn(email, password));
    }
    const isAuthenticating = useMemo(() => status === 'checking', [status])
    return (

        < AuthLayout title="Login">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster"
            >
                <Grid2 container direction={"column"}>
                    <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="Correo@gmail.com"
                            fullWidth
                            name="email"
                            onChange={onInputChange}
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            onChange={onInputChange}
                        />
                    </Grid2>
                    <Grid2 container
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        <Grid2
                            item
                            size={{ xs: 12 }}
                            sx={{ display: `${!!errorMessage ? ' block ' : ' none '}` }}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid2>
                        <Grid2 item size={{ xs: 6 }}>
                            <Button variant="contained" fullWidth type="submit"
                                disabled={isAuthenticating}>
                                Login
                            </Button>
                        </Grid2>
                        <Grid2 item size={{ xs: 6 }}>
                            <Button variant="contained" fullWidth onClick={onGoogleSignIn}
                                disabled={isAuthenticating}>
                                <Google sx={{ mr: 1 }} /> Google
                            </Button>
                        </Grid2>


                    </Grid2>
                </Grid2>
                <Grid2 container direction={'row'}
                    justifyContent={'end'}>
                    <Link color="inherit" to='/auth/register'
                        component={RouterLink}>
                        Crear una cuenta
                    </Link>
                </Grid2>
            </form >


        </AuthLayout>


    )
}