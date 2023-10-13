import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductModal = ({ show, handleClose, product, onSubmit }) => {
  const [name, setName] = useState(product.name);
  const [desc, setDesc] = useState(product.desc);
  const [price, setPrice] = useState(product.price);
  const [img, setImg] = useState(product.img);

  const submitHandler = (event) => {
    event.preventDefault();
    if (name !== "" && desc !== "" && price !== "" && img !== "") {
      const data = {
        name: name,
        desc: desc,
        price: price,
        img: img,
      };
      onSubmit(data);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Form className="" onSubmit={submitHandler}>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6} className="pt-3">
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} maxLength={20}  />
            </Col>
            <Col xs={12} md={6} className="pt-3">
              <Form.Control value={desc} onChange={(e) => setDesc(e.target.value)} minLength={40} maxLength={50}  />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="pt-3">
              <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)}  />
            </Col>
            <Col xs={12} md={6} className="pt-3">
              <Form.Control type="url" value={img} onChange={(e) => setImg(e.target.value)}  />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProductModal;