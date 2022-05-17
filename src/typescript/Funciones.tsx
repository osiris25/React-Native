export const Funciones = () => {
    const sumar = (a:number, b:number): number =>{
        return a+b;
    }


  return (
    <>
    <h3>Funciones</h3>
    <span>El resultado de la funcion es:{sumar(45,12)}</span>

    </>
  )
}
