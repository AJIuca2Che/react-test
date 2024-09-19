import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CoinChart from './CoinChart';

function ChartIncreaseSize() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Increase Chart Size
        </Button>
  
        <Modal show={show} onHide={handleClose} size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Increased Chart</Modal.Title>
          </Modal.Header>
          <Modal.Body><CoinChart/></Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ChartIncreaseSize;