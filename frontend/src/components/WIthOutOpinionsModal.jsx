import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const WIthOutOpinionsModal = ({onClose}) => {
  return (
    <div>
          <Modal show={true} onHide={onClose}>
            <Modal.Header >
            <Modal.Title style={{color:"#ee644c", fontSize:"1.5vh"}}>Ops! There are no reviews for this product at the moment. If you buy it, you can leave one. </Modal.Title>
      </Modal.Header>

      <Modal.Body>
            <Button style={{color:"#ee644c", background:"#1E1C1C"}} onClick={() => onClose()}>Close</Button>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default WIthOutOpinionsModal
