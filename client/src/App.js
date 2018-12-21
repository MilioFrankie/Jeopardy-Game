import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Jeopardy from "./components/Jeopardy";
import NavBar from "./components/NavBar";
import FetchCategories from "./components/FetchCategories";
const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Jeopardy} />
        <Route path="/createGame" component={FetchCategories} />
      </Switch>
    </Container>
  </Fragment>
);
export default App;
