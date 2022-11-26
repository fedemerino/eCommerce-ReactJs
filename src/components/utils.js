import { toast } from "react-toastify"

export const agregarAlCarrito = (ContextValue, itemFiltrado) => {
    const existe = ContextValue.productos.some(producto => {
      if (producto.id == itemFiltrado.id) return true
      else return false
    })

    if (existe) {
      toast.error('¡Este producto ya se encuentra en el carrito!')
      setTimeout(() => toast.dismiss(), 2000)
    }
    else {
      ContextValue.setCarrito(productos => [...productos, itemFiltrado])
      ContextValue.setTotal(cantidad => [cantidad + 1])
    }
    console.log(ContextValue.productos)
  }
