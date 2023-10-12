import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './Components/Form';
import Products from './Components/Products';
import useGet from './Hooks/use-get';
import { useEffect } from 'react';
import Context from './Components/Context';

function App() {
  const [get,products]=useGet();
  useEffect(()=>get("https://desafio-15-default-rtdb.firebaseio.com/Products.json"),[get]);
  return (


<Context.Provider value={{products:products,get:get}}>
<Add></Add>
<h1 className='pt-5  border-bottom border-dark'>PRODUCTOS</h1>
<Products></Products>
</Context.Provider>

  );
}

export default App;
