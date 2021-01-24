import React from 'react';
import { Container } from "reactstrap";
import CartDetail from '../cart/CartDetail';
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import {Route,Switch} from "react-router-dom";
import addOrUpdateProduct from '../products/addOrUpdateProduct';
import NotFound from "../common/NotFound"

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={DashBoard}></Route>
        <Route path="/product" exact component={DashBoard}></Route>
        <Route path="/saveProduct/:productId" component={addOrUpdateProduct}></Route>
        <Route path="/saveProduct" component={addOrUpdateProduct}></Route>
        <Route path="/cart" exact component={CartDetail}></Route>
        <Route component={NotFound}></Route>
        
        
        
        
      </Switch>
    </Container>
  );
}

export default App;
