import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Category from "./Category";
import { getCategories } from "../reducers/category";
import CategoryView from "./CategoryView";

class FetchCategories extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    return (
      <div>
        <Route exact path="/createGame" component={Category} />
        <Route
          exact
          path="/createGame/:id/createQuestion"
          component={CategoryView}
        />
      </div>
    );
  }
}

export default connect()(FetchCategories);
