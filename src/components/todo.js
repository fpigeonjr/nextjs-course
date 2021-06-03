import { useState } from 'react'
import Modal from './modal'
import Backdrop from './backdrop'

export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleDelete() {
    setModalIsOpen(true)
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  )
}
