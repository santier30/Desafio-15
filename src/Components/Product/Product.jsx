import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState , useContext } from 'react';
import Context from '../Context';
import usePut from '../../Hooks/use-put';
import ProductModal from './ProductModal';
import CloseButton from 'react-bootstrap/CloseButton';
import useDelete from '../../Hooks/use-delete';

const Product =({product})=>{
    
    
    const [show, setShow] = useState(false);


    const handleModal = () => setShow(()=>!show);

    const ctx = useContext(Context);

 const put = usePut();
 const del = useDelete();

 const deleteHandler=()=>{
   del("https://desafio-15-default-rtdb.firebaseio.com/Products",product.key,ctx.get)
 }

 
    return (
      <>
        <Card className="position-relative shadow rounded" style={{ width: '18rem' }}>
          <CloseButton className="position-absolute" style={{ right: '0' }} onClick={deleteHandler} />
          <Card.Img variant="top" src={product.img} style={{ height: '190px', width: '286' }} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
            <Card.Text>{"$" + product.price}</Card.Text>
            <Button variant="primary" onClick={handleModal}>Modificar</Button>
          </Card.Body>
        </Card>
  
        <ProductModal
          show={show}
          handleClose={handleModal}
          product={product}
          onSubmit={(data) => {
            // Handle the form submission with the data
            put("https://desafio-15-default-rtdb.firebaseio.com/Products", product.key, ctx.get, data);
          }}
        />
      </>
    );
    
}
export default Product