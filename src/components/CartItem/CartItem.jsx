import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import styles from './CartItem.module.scss'

function CartItem() {

  const { cart, addItem, removeItem } = useContext(CartContext)

  return (
    <>
      {
        cart.map((item) => {
          return (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.cartItemImage}>
                <img src={item.image} className={styles.img} alt={item.title} />
              </div>
              <span>{item.title}</span>
              <span className='d-none d-lg-block'>Precio: $ {item.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span>Subtotal: $ {(item.quantity * item.price).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <div className='minusDisplayPlus d-flex flex-column d-md-block'>
                <button className={`btn btn-primary`} onClick={() => removeItem(item, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button className={`btn btn-primary`} onClick={() => addItem(item, item.quantity)}>+</button>
              </div>

            </div>
          )
        })
      }
    </>
  )
}
export default CartItem