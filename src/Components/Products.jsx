import Product from "./Product";
import {  useContext } from 'react';
import Context from './Context';
const Products = ()=>{
    const ctx = useContext(Context);

    return (
  <main className="mt-5 w-100 d-flex justify-content-center ">
    <section className=" d-flex gap-4" style={{ width: '90%' }}> 
    {ctx.products.map((product)=><Product product={product} key={product.key}/>)}
    </section>
   
  </main>
    );
}
export default Products