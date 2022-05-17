import { useState } from 'react';
/* rafc para que salga la estructura */
export const useCounter = (inicial:number = 10) => {
    const [valor, setvalor] = useState(inicial);
    const acumular =(numero: number)=>{
        setvalor(valor + numero);
    }
    return{valor, acumular}
}
