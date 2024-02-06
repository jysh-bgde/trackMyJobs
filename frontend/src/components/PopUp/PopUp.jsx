import { Button, Modal } from 'flowbite-react'
import React from 'react'

const PopUp = ({showModal, setShowModal, bodyMessage}) => {
    return  <>
  
    <Modal dismissible show={showModal} onClose={() => setShowModal(false)}>
      <Modal.Header>Message:</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
         {bodyMessage}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>OK</Button>
      </Modal.Footer>
    </Modal>
  </>
}

export default PopUp