import { Alert, Button, Grid2, Link, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLInk } from "react-router";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
    email: '',
    password: '',
    displayName: ''
}
const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'EL password debe de tener más de 6 letras.'],
    displayName: [(value) => value.length >= 1, 'EL nombre es obligtorio']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmited, SetFormSubmited] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const { displayName, email, password, onInputChange, formState, isFormValid, onResetForm,
        displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);


    const onSubmit = (e) => {
        e.preventDefault();
        SetFormSubmited(true)
        if (!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
        onResetForm()
        SetFormSubmited(false)

    }

    return (

        < AuthLayout title="Registra una cuenta">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster"
            >
                <h1>El formulario es{isFormValid ? " válido " : ' inválido'}</h1>
                <Grid2 container direction={"column"}>
                    <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Tu nombre"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmited}
                            helperText={formSubmited && displayNameValid}
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="Correo@gmail.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmited}
                            helperText={formSubmited && emailValid}
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmited}
                            helperText={formSubmited && passwordValid}
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
                        <Grid2 item size={{ xs: 12 }}>
                            <Button
                                disabled={isCheckingAuthentication}
                                variant="contained"
                                fullWidth type="submit" >
                                Registrar
                            </Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 container direction={'row'}
                    justifyContent={'end'}>
                    <Link color="inherit" to='/auth/login'
                        component={RouterLInk}>
                        ¿Ya tienes cuenta?
                    </Link>
                </Grid2>
            </form >


        </AuthLayout >


    )
}