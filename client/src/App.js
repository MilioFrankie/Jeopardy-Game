import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Jeopardy from "./components/Jeopardy";
import NavBar from "./components/NavBar";
import CategoryForm from "./components/CategoryForm";

const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Jeopardy} />
        <Route exact path="/categoryForm" component={CategoryForm} />
      </Switch>
    </Container>
  </Fragment>
);
export default App;
