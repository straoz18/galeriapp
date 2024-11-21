import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import styles from './ItemCount.module.scss'

function ItemCount({ detail }) {

  const { cart, addItem } = useContext(CartContext)

  const [count, setCount] = useState(0)

  const [finishButton, setFinishButton] = useState(false)

  useEffect(() => {
    const itemInCart = cart.find(item => item.id === detail.id)
    if (itemInCart) {
      setCount(itemInCart.quantity)
      setFinishButton(true)
    }
  }, [cart, detail.id])

  const subtractCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addCount = () => {
    if (detail.stock > count) {
      setCount(count + 1)
    }
  }

  const addToCart = () => {
    addItem(detail, count)
    setFinishButton(true)
  }

  return (
    <div className='d-flex justify-content-center justify-content-md-end'>
      <div className='minusDisplayPlus'>
        <button className={`btn btn-primary ${finishButton && 'disabled'}`} onClick={subtractCount}>-</button>
        <span>{count}</span>
        <button className={`btn btn-primary ${finishButton && 'disabled'}`} onClick={addCount}>+</button>
      </div>

      {finishButton
        ? (
          <Link to='/cart' className={`btn btn-primary ${styles.addFinishButtons} ms-3 ${count === 0 && 'disabled'}`}>Terminar mi compra</Link>
        )
        : (
          <button className={`btn btn-primary ${styles.addFinishButtons} ms-3 ${count === 0 && 'disabled'}`} onClick={addToCart}>Agregar al carrito</button>
        )
      }

    </div>
  )

}

export default ItemCount