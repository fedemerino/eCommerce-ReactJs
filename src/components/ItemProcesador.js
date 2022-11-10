import React from 'react'

const ItemProcesador = ({itemFiltrado}) => {
    return (
        <div className='itemDetail'>
          <p>{itemFiltrado.prod}</p>
          <img src={itemFiltrado.img} />
          <p>Precio: ${itemFiltrado.precio}</p>
          <span>Detalles:</span>
          <div className='row specs'>
              <div className='col-lg-6 specs' >
                <p>Tipos de memoria RAM soportadas: {itemFiltrado.specs.ram}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Cantidad de núcleos de CPU: {itemFiltrado.specs.nucleos}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Zócalos compatibles: {itemFiltrado.specs.socket}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Generación: {itemFiltrado.specs.generacion}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Frecuencia máxima de reloj: {itemFiltrado.specs.freq}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p></p>
              </div>
          </div>
          <button className='boton'>Comprar</button>
        </div>
      )
}

export default ItemProcesador