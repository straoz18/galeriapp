import Loader from '../Loader/Loader'

function Order({ loading, orderId }) {
  return (
    <>
      {loading && (
        <Loader message={'Creando orden...'} />
      )}

      {orderId && (
        <div className='d-flex h-100 justify-content-center align-items-center text-center balance fs-4'>
          <p>Orden creada - ID: {orderId}</p>
        </div>
      )}
    </>
  )
}

export default Order