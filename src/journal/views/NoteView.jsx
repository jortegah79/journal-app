import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, Grid2, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote, startUploadingFiles,startDeletingNote } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';


export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { title, body, onInputChange, formState, date } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
        //return newDate.toLocaleDateString('ES');
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire(`Nota actualizada`, messageSaved, 'success');
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(setActiveNote(formState))
        dispatch(startSaveNote());
    }
    const onDelete=()=>{
        dispatch(startDeletingNote())
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files))
    }

    return (
        < >
            <Grid2 container className="animate__animated animate__fadeIn animate__faster"

                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}>
                <Grid2 item >
                    <Typography fontSize={39} fontWeight={'light'}>
                        {dateString}
                    </Typography>
                </Grid2>

                <Grid2 item>
                    <input
                        multiple
                        type="file"
                        ref={fileInputRef}
                        onChange={onFileInputChange}
                        style={{ display: 'none' }} />

                    <IconButton color="primary"
                        disabled={isSaving}
                        onClick={() => fileInputRef.current.click()}>
                        <UploadOutlined />
                    </IconButton>

                    <Button onClick={onSaveNote}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid2>
            </Grid2>
            <Grid2 container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Título"
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    sx={{ border: 'none', mb: 1 }} />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    name="body"
                    value={body}
                    onChange={onInputChange}
                    placeholder="Que sucedió en el día de hoy?"
                    minRows={5} />
            </Grid2>
            <Grid2 container
                justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color='error'>
                    <DeleteOutline />
                    Borrar
                </Button>

            </Grid2>

            <ImageGallery images={note.imageUrls} />
        </>
    );

}