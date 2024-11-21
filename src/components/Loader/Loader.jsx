function Loader({ message }) {
  return (
    <div className='d-flex justify-content-center text-center align-items-center h-100'>
      <div className='spinner-border text-primary' role='status'></div>
      <span className="ms-3">{message}</span>
    </div>
  )
}

export default Loader