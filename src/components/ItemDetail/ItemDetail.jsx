import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.scss'

function ItemDetail({ detail }) {

  return (
    <main className={`container ${styles.itemDetail}`}>
      <div className='d-block row d-md-flex flex-md-row mt-4'>

        <div className='text-center col-md-6'>
          <img src={detail.image} alt={detail.title} className={`border rounded ${styles.itemImage}`} />
        </div>

        <div className='text-center text-md-end balance col-md-6 mt-4 mt-md-0 mb-5'>
          <h1 className='fs-2'>{detail.title}</h1>
          <h2 className={`fs-5 ${styles.itemCategory}`}>{detail.categoryId && detail.categoryId.toUpperCase()}</h2>
          <p>{detail.description}</p>
          <p className='fs-4 item-price'>$ {parseFloat(detail.price).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p>Stock: {detail.stock}</p>
          <ItemCount detail={detail} />
        </div>

      </div>
    </main>
  )
}

export default ItemDetail