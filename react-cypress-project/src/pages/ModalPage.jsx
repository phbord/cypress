import React, { useState } from 'react'
import Modal from '../components/modal'
import { Link } from 'react-router-dom'

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const displayModal = () => setIsModalOpen(true)
  const hideModal = () => setIsModalOpen(false)

  return (
    <>
      <h4 className="mb-3">Modal</h4>
      <button type="button" 
              id='btn-modal'
              className="btn btn-primary me-2" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal" 
              onClick={() => displayModal()}>
        Launch demo modal
      </button>
      <Link to='/' className='btn btn-secondary' id='btn-return'>Retour à l'accueil</Link>
      {
        isModalOpen 
        && <Modal id='exampleModal' isModalOpen={isModalOpen} hideModal={hideModal}>
          Chuck Norris est un génie.
        </Modal>
      }
    </>
  )
}

export default ModalPage