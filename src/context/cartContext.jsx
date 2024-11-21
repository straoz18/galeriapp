import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext() // This context is used on CartWidget.jsx & Cart.jsx

export function CartProvider({ children }) { // This component is imported on Router.jsx

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const cartWidgetAmount = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

  const isInCart = (itemId) => cart.some(item => item.id === itemId)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateCart = cart.map(itemId => {
        if (itemId.id === item.id) {
          if (itemId.stock > itemId.quantity) {
            return { ...itemId, quantity: itemId.quantity + 1 }
          } else {
            return itemId
          }
        } else {
          return itemId
        }
      })
      setCart(updateCart)
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  }

  const removeItem = (item, quantity) => {
    if (quantity > 1) {
      const updateCart = cart.map(itemId => itemId.id === item.id
        ? { ...itemId, quantity: itemId.quantity - 1 }
        : itemId
      )
      setCart(updateCart)
    } else {
      setCart(cart.filter(itemId => itemId.id !== item.id))
    }
  }

  const clear = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartWidgetAmount }}>
      {children}
    </CartContext.Provider>
  )
}