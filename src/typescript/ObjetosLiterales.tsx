/* ------------------------------------- INTERFACE --------------------------------- */
interface Persona {
    nombreCompleto:string;
    edad:number;
    direccion: Direccion;
   
}
interface Direccion {
    pais: 'Canadá',
    casaNo: 615
}

export const ObjetosLiterales = () => {
    const persona:Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }
    }

  return (
    <>
    <h3>OBJETOS LITERALES</h3>
    </>
  )
}
