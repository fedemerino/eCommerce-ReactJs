import { toast } from "react-toastify"

export const agregarAlCarrito = (ContextValue, itemFiltrado) => {
    const existe = ContextValue.productos.some(producto => {
      if (producto.id == itemFiltrado.id) return true
      else return false
    })

    if (existe) {
      toast.error('¡Este producto ya se encuentra en el carrito!')
      setTimeout(() => toast.dismiss(), 1800)
    }
    else {
      ContextValue.setCarrito(productos => [...productos, itemFiltrado])
      ContextValue.setTotal(cantidad => [cantidad + 1])
      toast.success('¡Producto agregado al carrito!')
      setTimeout(() => toast.dismiss(), 1800)
    }
  }
