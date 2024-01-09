import React from 'react';
import { Main, Nav } from '_components';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Route exact path="/">
          <Main />
        </Route>
      </div>
    </BrowserRouter>
  );

}

export default App
