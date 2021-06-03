import { useState } from 'react'
import Modal from './modal'
import Backdrop from './backdrop'

export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleDelete() {
    setModalIsOpen(true)
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}
