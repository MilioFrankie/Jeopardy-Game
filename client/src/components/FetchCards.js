import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getCards } from "../reducers/card";
import CategoryView from "./CategoryView";
class FetchCards extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCards(this.props.match.params.id));
    debugger;
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/createGame/:id/createQuestion"
          component={CategoryView}
        />
      </div>
    );
  }
}

export default connect()(FetchCards);
