import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Default from "./pages/Default";
import GlobalStyles from "./components/globals/GlobalStyles";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <GlobalStyles />
        <Switch>
            <Route exact path= "/" component={Home} />
            <Route component = {Default} />
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
