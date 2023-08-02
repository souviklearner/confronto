import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compare from './components/Compare'
import Product from './components/Product'
import Catalog from './components/Catalog'
import { Link, useRouteMatch, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { initCatalog } from "./store/actions/catalogActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCatalog());
  }, []);

  return (
    <BrowserRouter>
    <div className="confronto-app">
      <h1>Confronto</h1>
      <div className="navigation">
        <Link className="strong" to={`/`}>Catalog</Link>
        <Link className="strong" to={`/compare`}>Compare</Link>
      </div>
      <div className="content">
      <Switch>
        <Route exact path="/"><Catalog /></Route>
        <Route path="/product/:id"><Product /></Route>
        <Route path="/compare"><Compare /></Route>     
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
