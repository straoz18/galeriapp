import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader'

function ItemDetailContainer() {

  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    // Firebase - Get a specific document
    const db = getFirestore()
    const itemRef = doc(db, 'items',
      itemId)
    getDoc(itemRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setDetail({ id: snapshot.id, ...snapshot.data() })
          setLoading(false)
        }
      })

  }, [itemId])

  if (loading) {
    return (
      <Loader message={'Cargando producto...'} />
    )
  } else {
    return (
      <ItemDetail detail={detail} />
    )
  }
}

export default ItemDetailContainer