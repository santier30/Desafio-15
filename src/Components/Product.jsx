import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState , useContext } from 'react';
import Context from './Context';
import usePut from '../Hooks/use-put';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';
import useDelete from '../Hooks/use-delete';

const Product =({product})=>{
    
    
    const [show, setShow] = useState(false);
    const [name,setName]= useState(product.name);
    const [desc,setDesc]= useState(product.desc);
    const [price,setPrice]= useState(product.price);
    const [img,setImg]= useState(product.img);

    const handleModal = () => setShow(()=>!show);

    const ctx = useContext(Context);

 const put = usePut();
 const del = useDelete();

 const deleteHandler=()=>{
   del("https://desafio-15-default-rtdb.firebaseio.com/Products",product.key,ctx.get)
 }
 const submitHandler=(event)=>{
    event.preventDefault();
    if(name!=="" && desc!=="" && price!=="" && img!==""){
        const data={name:name,
            desc:desc,
            price:price,
            img:img}
            put("https://desafio-15-default-rtdb.firebaseio.com/Products",product.key ,ctx.get,data)
            handleModal()
    }}
 
    return(
       <> <Card className='position-relative shadow rounded' style={{ width: '18rem' }}>
        <CloseButton className='position-absolute ' style={{ right: '0' }} onClick={deleteHandler}/>
      <Card.Img variant="top" src={product.img} style={{ height: '190px', width:'286' }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.desc}
        </Card.Text>
        <Card.Text>
          {"$" + product.price}
        </Card.Text>
        <Button variant="primary" onClick={handleModal}>Modificar</Button>
      </Card.Body>
    </Card>



<Modal show={show} onHide={handleModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Form className="" onSubmit={submitHandler}>
        <Modal.Body>
      <Row>
        <Col xs={12} md={6} className='pt-3'>
          <Form.Control  value={name} onChange={(e)=>setName(e.target.value)}  maxLength={20} requiere/>
        </Col>
        <Col xs={12} md={6} className='pt-3'>
          <Form.Control  value={desc} onChange={(e)=>setDesc(e.target.value)}  minLength={40} maxLength={50} requiere/>
        </Col>
      </Row>
      <Row >
        <Col xs={12} md={6} className='pt-3'>
          <Form.Control  type='number'  value={price} onChange={(e)=>setPrice(e.target.value)} requiere/>
        </Col>
        <Col xs={12} md={6} className='pt-3'>
        <Form.Control  type='url'  value={img} onChange={(e)=>setImg(e.target.value)} requiere/>
        </Col>
      </Row>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>Close</Button>
          <Button variant="primary" type='submit' >Save changes</Button>
        </Modal.Footer>
    </Form>

      </Modal>
</>
    )
    
}
export default Product