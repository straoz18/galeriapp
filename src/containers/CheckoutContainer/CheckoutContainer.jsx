import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import Order from '../../components/Order/Order'
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore'

function Checkout() {
  const { cart, clear } = useContext(CartContext)

  const [loading, setLoading] = useState(false)

  const [name, setName] = useState(undefined)
  const handleName = (e) => {
    setName(e.target.value)
  }

  const [phone, setPhone] = useState(undefined)
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const [email, setEmail] = useState(undefined)
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const [verified, setVerified] = useState(false)
  const handleCaptcha = () => setVerified(true)

  const [orderId, setOrderId] = useState(undefined)

  const sendOrder = async () => {

    if (name && phone && phone.length === 10 && parseInt(phone) && email && email.includes('@') && cart.length > 0 && verified) {

      setLoading(true)

      const order = {
        buyer: { name: name, phone: phone, email: email },
        items: cart.map(item => {
          return { id: item.id, title: item.title, price: item.price, quantity: item.quantity }
        }),
        date: new Date(),
        total: cart.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)
      }

      const db = getFirestore()

      const ordersCollection = collection(db, 'orders')

      try {
        const { id } = await addDoc(ordersCollection, order)
        setOrderId(id)

        // Update item stock
        const itemsCollection = collection(db, 'items')
        cart.forEach(async (item) => {
          const itemRef = doc(itemsCollection, item.id)
          await updateDoc(itemRef, { stock: item.stock - item.quantity })
        })

        clear()
      } catch (error) {
        console.error('No se pudo crear la orden:', error)
      }
      setLoading(false)

    } else {
      console.error('No se pudo crear la orden. Completar todos los campos requeridos y asegurarse de tener productos en el carrito.')
    }
  }

  if (!loading && !orderId) {
    return (
      <CheckoutForm
        sendOrder={sendOrder}
        handleName={handleName}
        handlePhone={handlePhone}
        handleEmail={handleEmail}
        handleCaptcha={handleCaptcha}
        orderId={orderId}
        cart={cart}
        name={name}
        phone={phone}
        email={email}
        verified={verified}
      />
    )
  } else {
    return (
      <Order loading={loading} orderId={orderId} />
    )
  }
}

export default Checkout