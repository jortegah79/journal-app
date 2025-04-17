import { FamilyRestroomRounded } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";

// ejemplo de inicialicacion del hook

// const initialValueForm={
//     'username': '',
//     'email': '',
//     'password': ''
// }

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [formState])

    useEffect(()=>{
        setFormState(initialForm);
    },[initialForm])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState((current) => ({
            ...current,
            [name]: value
        }))
    }
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] != null){
                console.log("error");
                
                return false;
            } 
        }
        return true;
    }, [formValidation])

    const onResetForm = () => {
        setFormState(initialForm);
    }
    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage] = formValidations[formField]
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage

        }
        setFormValidation(formCheckedValues)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}