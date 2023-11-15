import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailsContainer from "./components/ItemDetailsContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/category/:id" element={ <ItemListContainer /> }/>
          <Route path="/item/:id" element={ <ItemDetailsContainer /> }/>
          <Route path="*" element={ <> <div className="container">404</div> </> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
