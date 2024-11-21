import { Link } from 'react-router-dom'
import styles from './Item.module.scss'

function Item({ item }) {
  return (
    <div className='d-flex col justify-content-center my-4'>
      <div className={`card ${styles.card}`}>
        <div className={`mt-1 image-container ${styles.imageContainer}`}>
          <img src={item.image} className={styles.cardImgTop} alt='...' />
        </div>
        <div className='card-body d-flex flex-column justify-content-between'>
          <h5 className='card-title'>{item.title}</h5>
          <div className='border-top'>
            <p className={`card-text fs-4 mt-2 mb-3 ${styles.itemPrice}`}>$ {item.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            {item.stock === 0
              ? (<Link to={`/item/${item.id}`} className='btn btn-secondary disabled'>Sin stock</Link>)
              : (<Link to={`/item/${item.id}`} className='btn btn-primary'>Ver descripción</Link>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item