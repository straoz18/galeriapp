import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'
import styles from './CheckoutForm.module.scss'

function CheckoutForm({ handleName, handlePhone, handleEmail, handleCaptcha, sendOrder, cart, name, phone, email, verified }) {

  const form = useRef()

  const sendEmail = () => {
    if (name && phone && phone.length === 10 && parseInt(phone) && email && email.includes('@') && cart.length > 0 && verified) {
      try {
        emailjs.sendForm('service_7y665pr', 'template_0zjm6ef', form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
          .then((result) => {
            console.log(result.text)
          }, (error) => {
            console.log(error.text)
          })
      } catch (error) {
        console.error('No se pudo enviar el correo electrónico:', error)
      }
    }
  }

  const send = (e) => {
    e.preventDefault()
    sendOrder()
    sendEmail()
  }

  return (
    <div className={`pb-5 ${styles.checkout}`}>
      <h1 className='fs-4 mt-3'>Finalizar compra</h1>
      <p className='mt-4 mx-4 text-center balance'>Complete el formulario con sus datos. Todos los campos y el CAPTCHA son requeridos.</p>
      <form action='' ref={form} onSubmit={send} className={`mt-1 ${styles.form}`}>

        <fieldset className='d-flex flex-column justify-content-center gap-2 my-3'>
          <label className='form-label' htmlFor='name'>Nombre</label>
          <input className='form-control' type='text' id='name' name='name' placeholder='Linus Torvalds' required onChange={handleName} />
        </fieldset>

        <fieldset className='d-flex flex-column justify-content-center gap-2 my-3'>
          <label className='form-label' htmlFor='phone'>Teléfono (10 dígitos)</label>
          <input className='form-control' type='tel' id='phone' name='phone' minLength='10' maxLength='10' placeholder='1123456789' required onChange={handlePhone} />
        </fieldset>

        <fieldset className='d-flex flex-column justify-content-center gap-2 my-3'>
          <label className='form-label' htmlFor='email'>Email</label>
          <input className='form-control' type='email' id='email' name='email' placeholder='linustorvalds@outlook.com' required onChange={handleEmail} />
        </fieldset>


        {/* Hidden information for EmailJS */}
        <textarea name='cart' className='d-none' value={
          cart.map(item => (
            `
            ${JSON.stringify(item.title)} - Cantidad: ${JSON.stringify(item.quantity)} - Precio: $${JSON.stringify(item.price)}
            `
          )).join('')
        } readOnly />
        <textarea name='total' className='d-none' value={JSON.stringify(cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0))} readOnly />


        <ReCAPTCHA sitekey='6Ledm1soAAAAAGwoRJq8JOw5VBLOZgV0NUcZzt4v' onChange={handleCaptcha} />

        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-primary mt-4'>Crear orden</button>
        </div>

      </form>
    </div>
  )
}

export default CheckoutForm