import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data/data";
import {
  Container,
} from "@mui/material";

const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    promise.then((response) => {
      const producto = response.find((item) => item.id == id);
      setItem(producto);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <>
        <Container>
          <div className="container"> Cargando ...</div>
        </Container>
        </>
      ) : (
        <Container>
          <div className="row">
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={item.imagen} alt="" />
            </div>
            <div className="col-12 col-md-6">
              <h1>{item.nombre}</h1>
              <p className="mb-1">Fecha de lanzamiento: {item.lanzamiento}</p>
              <h3>Precio: {item.precio}</h3>
              <div>
                <button className="btn btn-primary mt-3">
                  Comprar ahora!
                </button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default ItemDetailsContainer;
