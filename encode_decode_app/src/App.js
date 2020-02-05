import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import DecodedEncoded from "./containers/DecodedEncoded/DecodedEncoded";

class App extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <Switch>
            <Route path="/" exact component={DecodedEncoded} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
