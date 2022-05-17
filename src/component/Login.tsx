
import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { type } from '@testing-library/user-event/dist/type';
export const Login = () => {

    /* INTERFACE */
    interface AuthState{
        validando: boolean,
        token:string | null,
        username: string,
        nombre: string
    }

    /* inicializa el estado  */
    const initialState = {
        validando:true,
        token:null,
        username:'',
        nombre:''
    }
    
    type AuthAction = 
        |{type :'logout'}
        |{type : 'login', payload:LoginPayload}
    
    type LoginPayload= {
        username:string;
        nombre:string}
    
    const authReducer = (state:AuthState, action:AuthAction): AuthState =>{
        switch(action.type){
            case 'logout':
            return{
                validando:false,
                token: null,
                nombre:'',
                username:''
            }
            case 'login':
                const{nombre, username}= action.payload;
                return{
                validando: false,
                token:'ABCDER7412',
                nombre:nombre,
                username:username
                }
            default:
                return state;
        }
    }

    const [{validando,token,nombre}, dispatch] = useReducer(authReducer, initialState);

   useEffect(() => {
    setTimeout(()=>{
        /* Dispara una accion */
        dispatch({type:'logout'})
    },1500);
   }, []);

   const login =()=>{
       dispatch({
           type: 'login',
           payload:{
               nombre:'Wendy',
               username:'Osiris'
           }
       })
   }

   const logout =()=>{
       dispatch({
           type: 'logout',

       })
   }

   /* Validando */
   if(validando){
       return(
           <>           
            <div className='alert alert-info'>Validando...</div>
           </>
       )
   }
   
  return (
    <>
    <h3>Login</h3>
    {
        (token)
        ?(<div className='alert alert-success'>Autenticado:{nombre}</div>)
        :(<div className='alert alert-danger'>No autenticado</div>)
        
    }
    {
        (token)
        ?<button className='btn btn-danger' onClick={logout}>Logout</button>
        :<button className='btn btn-primary'onClick={login}>Login</button>
    }
    </>
  )
}
