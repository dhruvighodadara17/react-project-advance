import React, { useRef } from 'react'
import CustomModal from './CustomModal' // ✅ Import the Custom Modal
import styles from './model.module.css'

const ModalExample: React.FC = () => {
  const modalRef = useRef<{ showModal: () => void; hideModal: () => void }>(null)

  return (
    <div className={styles.container}>
      <h2>🖥️ Custom Modal with Forward Ref</h2>
      <p>
        This example shows how `React.forwardRef()` can be used to open, close, and control a modal
        from the parent component.
      </p>

      {/* ✅ Control Modal via Ref */}
      <button onClick={() => modalRef.current?.showModal()} className={styles.button}>
        Open Modal
      </button>

      {/* ✅ CustomModal Component Controlled via Ref */}
      <CustomModal ref={modalRef} title="User Details" />
    </div>
  )
}

export default ModalExample
