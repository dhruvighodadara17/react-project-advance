import React, { useImperativeHandle, useRef, useState } from 'react'
import styles from './CustomModel.module.css'

interface ModalProps {
  title: string
}

// ✅ `React.forwardRef()` for exposing `.showModal()` method
const CustomModal = React.forwardRef(({ title }: ModalProps, ref) => {
  const [isVisible, setIsVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null) // ✅ Ref for the input field

  // ✅ `useImperativeHandle` to expose `.showModal()` to the parent
  useImperativeHandle(ref, () => ({
    showModal: () => {
      setIsVisible(true)
      setTimeout(() => inputRef.current?.focus(), 100) // ✅ Auto-focus on input
    },
    hideModal: () => setIsVisible(false),
  }))

  if (!isVisible) return null // Hide modal if `isVisible` is `false`

  return (
    <div className={styles.overlay} onClick={() => setIsVisible(false)}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2>{title}</h2>

        <label>
          Enter Your Name:
          <input
            ref={inputRef} // ✅ ForwardRef controls focus here
            type="text"
            placeholder="Your name"
            className={styles.input}
          />
        </label>

        <button onClick={() => setIsVisible(false)} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  )
})

export default CustomModal
