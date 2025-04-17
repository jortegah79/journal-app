import { TurnedInNot } from "@mui/icons-material";
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { selectActiveNote } from "../../store/journal/thunks";

export const SideBarItem = ({ title, body, id }) => {
    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);

    const onSelectNote = () => {
        dispatch(selectActiveNote(id));


    }

    return (
        <ListItem disablePadding >
            <ListItemButton onClick={onSelectNote}>
                <ListItemIcon>
                    <TurnedInNot></TurnedInNot>
                </ListItemIcon>
                <Grid2
                    container
                    direction="column" >
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid2>
            </ListItemButton>
        </ListItem>
    );
}