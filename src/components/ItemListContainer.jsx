import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
} from "@mui/material";

import { productos } from "../data/data";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams();

    useEffect(() => {
      const promise = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(productos)
            }, 2000)
      })   
      promise
        .then((response) => {
          if(id){
            const filteres = response.filter(item => item.categoria === id)
            setItems(filteres)            
          }else{
            setItems(productos)  
          }
      }).finally(() => setLoading(false))
    },[id])

    
  return (
    <>
      <Container>
          { loading ? <> Cargando ... </> : 
            <ItemList items={items}/>
          }
      </Container>
    </>
  );
};

export default ItemListContainer;
