import React from 'react'

export const Message = ({ error= false, loading=false }) => {
    
    console.log("se escribio")
    
  return (
        <div className='col-auto m-auto text-center'> 
            <div className={`spinner-grow ${error ? 'text-danger' : loading ? 'text-success' : null }`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
                
            <p className= {`${ error ? 'text-danger': loading ? 'text-success' : null }`}>
                { error ? "Introduzca otro codigo" : loading ?  "Cargando..." : null }
            </p>
        </div>  
    )
}
