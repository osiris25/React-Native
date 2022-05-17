/* import { TiposBasicos } from "./typescript/TiposBasicos"; */
/* 
import { Contador } from "./component/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales"; */
import { ContadorConHook } from './component/ContadorConHook';
import { Formularios } from './component/Formularios';
import { Login } from './component/Login';
import { Usuarios } from './component/Usuarios';

 const App = () => {
  return (
    <div className='mt-2'>
    <h1>Introducción a TS-React</h1>
    <hr/>
   {/*  <TiposBasicos/> */}
   {/* <ObjetosLiterales/> */}
   {/* <Funciones/> */}
   {/* <Contador/> */}
   {/*  <ContadorConHook/> */}
   {/* <Login/> */}
   {/* <Usuarios/> */}
   <Formularios/>
    </div>
  )
}
 export default App;
