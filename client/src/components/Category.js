import React from "react";
import { connect } from "react-redux";
import { Header, Segment } from "semantic-ui-react";
import CategoryForm from "./CategoryForm";
import { getCategories } from "../reducers/category";
import { Link } from "react-router-dom";

class Category extends React.Component {
  renderCategories = () => {
    const { categories } = this.props;
    return categories.map(c => (
      <h3>
        <Link to={`createGame/${c.id}/questionForm`}>{c.name}</Link>
      </h3>
    ));
  };

  render() {
    return (
      <div>
        <div>
          <CategoryForm />
        </div>
        <Header as="h1" textAlign="center">
          YOUR CATEGORIES
        </Header>
        <hr />
        <Segment>{this.renderCategories()}</Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.category };
};

export default connect(mapStateToProps)(Category);
