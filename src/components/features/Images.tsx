import React, { useEffect, useDeferredValue } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchImages } from '../features/images/imageSlice'
import styles from './Images.module.css'

const Images: React.FC = () => {
  const dispatch = useAppDispatch()

  // ✅ Fetch images from Redux
  const { images, loading, error } = useAppSelector((state) => state.images)
  const searchTerm = useAppSelector((state) => state.search.searchTerm)

  // ✅ Defer searchTerm to avoid unnecessary re-renders
  const deferredSearchTerm = useDeferredValue(searchTerm)

  // ✅ Fetch images on component mount
  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch])

  // ✅ Filter images by author name
  const filteredImages = images.filter((image) =>
    image.author.toLowerCase().includes(deferredSearchTerm.toLowerCase()),
  )

  return (
    <div>
      <h2>📸 Image Gallery</h2>

      {loading && <p>Loading images... ⏳</p>}
      {error && <p style={{ color: 'red' }}>❌ Error: {error}</p>}

      <div className={styles.gallery}>
        {filteredImages.length > 0 ? (
          filteredImages.map((img) => (
            <div key={img.id} className={styles.imageCard}>
              <img src={img.download_url} alt={img.author} className={styles.image} />
              <p className={styles.caption}>{img.author}</p>
            </div>
          ))
        ) : (
          <p>No images found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  )
}

export default Images
