import React from 'react'

const ItemPlaca = ({itemFiltrado}) => {
    return (
        <div className='itemDetail'>
          <p>{itemFiltrado.prod}</p>
          <img src={itemFiltrado.img} />
          <p>Precio: ${itemFiltrado.precio}</p>
          <span>Detalles:</span>
          <div className='row specs'>
              <div className='col-lg-6 specs' >
                <p>Fabricante: {itemFiltrado.specs.fabricante}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Tipo de memoria gráfica: {itemFiltrado.specs.ram}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Interfaz con la placa madre: {itemFiltrado.specs.pci}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Tamaño de memoria: {itemFiltrado.specs.memoria}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p>Conectividad: {itemFiltrado.specs.conectividad}</p>
              </div>
              <div className='col-lg-6 specs' >
                <p></p>
              </div>
          </div>
          <button className='boton'>Comprar</button>
        </div>
      )
}

export default ItemPlaca