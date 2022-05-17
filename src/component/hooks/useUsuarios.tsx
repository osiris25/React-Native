import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../../api/reqRes';
import { reqResListado, Usuario } from '../interfaces/resResp';

export const useUsuarios = () => {

    const [ usuarios,setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);
    useEffect(()=>{
        cargarUsuarios();
    },[])

    const cargarUsuarios=async()=>{
        const resp = await reqResApi.get<reqResListado>('/users',{
            params:{
                page:paginaRef.current
                
            }
        })
        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);
            paginaRef.current ++;
            console.log(paginaRef.current)
        }else {
            paginaRef.current --;
            alert('No more record');
        }
    
            
    }
    const paginaSiguiente=()=>{
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior= ()=>{
        if(paginaRef.current >1){
            paginaRef.current --;
            cargarUsuarios();
        }
        
    }
    return{
        usuarios, paginaAnterior, paginaSiguiente
    }
}
