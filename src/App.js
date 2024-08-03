import { useEffect, useState } from "react";
import InputProduct from "./components/InputProduct";
import ProductList from "./components/ProductList";
function App() {
  
  const syncLocalStorageWithState = ()=>{
    const localStorageData = [];
    for(let i=0; i<localStorage.length; i++){
      let key = localStorage.key(i);
      if (key) {
        const item = JSON.parse(localStorage.getItem(key));
        localStorageData.push({ key, ...item });
      }
      
    }
    setProduct(localStorageData)
  }
  const [initial, setProduct] = useState([])
  useEffect(()=>{
    syncLocalStorageWithState()
  },[])

  const onSaveProductHandler = (data) =>{
    localStorage.setItem(data.pid, JSON.stringify(data))
      console.log(data)
      setProduct((prevData)=>{
        return [...prevData, data]
      })
  }


  return (
    <>
      <InputProduct  onSaveProduct={onSaveProductHandler}/>
      <ProductList items={initial} onSync={syncLocalStorageWithState}/>
    </>
  );
}

export default App;
