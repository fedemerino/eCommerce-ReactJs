import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useRef, useContext, useState } from "react"
import { db } from "../firebase"
import CarritoProductList from "./CarritoProductList"
import { contexto } from './CustomProvider'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";


import IdContainer from "./IdContainer"
const Carrito = () => {


    const estandarUSD = Intl.NumberFormat('es-AR');
    const { productos, precio, vaciarCarrito } = useContext(contexto)
    const refName = useRef()
    const refEmail = useRef()
    const [id, setId] = useState("")
    const [enabled, setEnabled] = useState(false)
    const navigate = useNavigate()

    const handleVaciar = () => {
        vaciarCarrito()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {
                name: refName.current.value,
                email: refEmail.current.value
            },
            products: productos,
            total: precio,
            date: serverTimestamp()
        }

        const ordersCollection = collection(db, 'orders')
        const consulta = addDoc(ordersCollection, orden)

        consulta
            .then((docRef) => {
                setEnabled(true)
                toast.info("Su compra está siendo procesada")
                setId(docRef.id)
                setTimeout(() => {
                    toast.dismiss()
                    setTimeout(() => {
                        toast.success("Muchas gracias por su compra. Será redireccionado automaticamente. Por favor espere")
                        setTimeout(() => {
                            vaciarCarrito()
                            navigate("/");
                        }, 10000)
                    }, 2000)

                }, 1500)

            })
            .catch((error) => toast.error(error))
    }

    return (
        <div className="row divider">

            <div className="col-md-4 cartContainer">

                {
                    productos.map((producto) => {
                        return <CarritoProductList key={producto.id} {...producto} />
                    })
                }
            </div>
            <div className="col-md-2">
                <div className="totalPrice">
                    <p>Total</p>
                    <p>${estandarUSD.format(precio)}</p>
                    <button className="buttonCounter" onClick={handleVaciar}>Vaciar Carrito</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="leftDivider">
                    {id ? <IdContainer id={id} /> : null}
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <label for="name">Nombre: </label>
                            <input id="name" ref={refName} type="text" required />
                        </div>
                        <div>
                            <label for="email">Email: </label>
                            <input id="email" ref={refEmail} type="email" required />
                        </div>
                        <button className='buttonCounter mt-1' disabled={enabled}>Confirmar Compra</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Carrito