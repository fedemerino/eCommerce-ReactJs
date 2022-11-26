import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useRef, useContext, useState } from "react"
import { db } from "../firebase"
import { contexto } from './CustomProvider'

const Carrito = () => {

    const { productos } = useContext(contexto)
    const refName = useRef()
    const refEmail = useRef()
    const [id, setId] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            buyer: {
                name: refName.current.value,
                email: refEmail.current.value
            },
            products: productos,
            total: 0,
            date: serverTimestamp()
        }

        const ordersCollection = collection(db, 'orders')
        const consulta = addDoc(ordersCollection, orden)

        consulta
            .then((docRef) => {
                setId(docRef.id)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="row">
            <div className="col-md-6">
                
            </div>
            
            <div className="col-md-6">
                {id ? <h1>Orden generada con éxito, su id es {id}</h1> : null}
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <label for="name">Nombre: </label>
                        <input id="name"ref={refName} type="text" />
                    </div>
                    <div>
                    <label for="email">Email: </label>
                        <input id="email" ref={refEmail} type="email" />
                    </div>
                    <button>Confirmar compra</button>
                </form>
            </div>
        </div>
    )
}

export default Carrito