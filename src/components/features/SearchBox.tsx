import React, { useState, useDeferredValue } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setSearchTerm } from '../features/search/searchSlice'

import styles from './SeachBox.module.css'

const SearchBox: React.FC = () => {
  const dispatch = useAppDispatch()
  const searchTerm = useAppSelector((state) => state.search.searchTerm)

  const [inputValue, setInputValue] = useState(searchTerm)
  const deferredSearchTerm = useDeferredValue(inputValue) // ✅ Delay updates for better performance

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    dispatch(setSearchTerm(e.target.value)) // ✅ Update Redux store
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="🔍 Search..."
        value={inputValue}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </div>
  )
}

export default SearchBox
