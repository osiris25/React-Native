import { useState } from 'react';
export const useForm = <T extends Object>(formulario:T) => {
    const [state, setState] = useState(formulario);

    const onChange = (value:string, campo:keyof T) =>{
        setState({
            //Destructuramos los valores del formulario
            ...state,
            //El poner los campos entre [] se le llama computar
            [campo]:value
        });
    }
    return{ ...state,onChange,state }
}
