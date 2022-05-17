export const TiposBasicos = () => {
    /* una variable se puede tipar con diferentes tipos de datos 
    const nombre: string | number | boolean = 'Fernando';*/
    const nombre: string  = 'Fernando';
    const edad: number= 35;
    const estaActivo:boolean = false;
    const poderes: string[] =['Velocidad','Volar','Respirar en el agua'] //

  return (
      /* fracmento  */
    <>
    <h3>Tipos basicos</h3>
    {nombre},{edad},{(estaActivo) ? 'activo' : 'no activo'}
    <br/>
    {poderes.join(',')}
    </>
  )
}
