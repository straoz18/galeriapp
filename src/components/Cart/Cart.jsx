import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.scss'

function Cart() {

  const { cart, clear } = useContext(CartContext)

  if (cart.length > 0) {
    return (
      <div className={`pb-5 ${styles.cart}`}>
        <h1 className='fs-4 mt-3'>Estado del carrito</h1>
        <CartItem />

        <div className='mt-2'>
          <h2 className='fs-5'>Total: $ {(
            cart.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0))
            .toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          }</h2>
          <div className='d-flex gap-3 justify-content-center mt-4'>
            <button className='btn btn-primary' onClick={clear}>Limpiar carrito</button>
            <Link to='/checkout' className='btn btn-primary'>Continuar</Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center text-center h-100'>
        <h1 className='fs-4'>No hay ítems en el carrito</h1>
        <Link to='/' className='btn btn-primary mt-5'>Volver al inicio</Link>
      </div>
    )
  }

}

export default Cart