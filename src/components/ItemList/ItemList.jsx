import Item from '../Item/Item'
import styles from './ItemList.module.scss'

function ItemList({ list }) {
  return (
    <main className={`item-list-container container-fluid container-lg pb-5 ${styles.itemList}`}>
      <div className='d-flex flex-row flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center'>

        {
          list.map((item) => (
            <Item key={item.id} item={item} />
          ))
        }

      </div>
    </main >
  )
}

export default ItemList