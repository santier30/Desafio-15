import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import usePost from '../Hooks/usePost';
import { useState , useContext } from 'react';
import Context from './Context';
const Add = ()=>{
 const [name,setName]= useState('');
 const [desc,setDesc]= useState('');
 const [price,setPrice]= useState('');
 const [img,setImg]= useState('');
 const ctx = useContext(Context);
 const post = usePost();

 const submitHandler=(event)=>{
    event.preventDefault();
    if(name!=="" && desc!=="" && price!=="" && img!==""){
        const data={name:name,
            desc:desc,
            price:price,
            img:img}
            post(data,"https://desafio-15-default-rtdb.firebaseio.com/Products.json",ctx.get)
            reset()
    }}

const reset= ()=>{
    setDesc("")
    setPrice("")
    setName("")
    setImg("")

};
    return (
        <header className="w-100 d-flex justify-content-center">
    <Form className="w-75" onSubmit={submitHandler}>
      <Row>
        <Col xs={12} md={6} className='pt-3'>
          <Form.Control placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)} maxLength={20}/>
        </Col>
        <Col xs={12} md={6} className='pt-3'>
          <Form.Control placeholder="Descripcion" value={desc} onChange={(e)=>setDesc(e.target.value)} minLength={40} maxLength={50}/>
        </Col>
      </Row>
      <Row >
        <Col xs={12} md={6} className='pt-3'>
          <Form.Control placeholder="Precio" type='number'  value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </Col>
        <Col xs={12} md={6} className='pt-3'>
        <Form.Control placeholder="Imagen-URL" type='url'  value={img} onChange={(e)=>setImg(e.target.value)}/>
        </Col>
      </Row>
      <div className='pt-3 w-100 d-flex justify-content-md-end gap-3 justify-content-center' >
      <Button variant="primary" size="lg" active type='submit'>
        Agregar Producto
      </Button>
      <Button variant="secondary" size="lg" active type='button'>
        Cancelar
      </Button>
      </div>
    </Form>
        </header>
    );
}
export default Add