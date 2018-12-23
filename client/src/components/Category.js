import React from "react";
import { connect } from "react-redux";
import { Header, Segment, Button } from "semantic-ui-react";
import CategoryForm from "./CategoryForm";
import { getCategories, deleteCategory } from "../reducers/category";
import { Link } from "react-router-dom";

class Category extends React.Component {
  handleDelete = id => {
    const {
      categories,
      dispatch,
      history: { push }
    } = this.props;
    dispatch(deleteCategory(id));
    push("/createGame");
  };

  renderCategories = () => {
    const { categories } = this.props;
    return categories.map(c => (
      <h2>
        <Segment raised>
          <Button
            color="red"
            floated="right"
            onClick={() => this.handleDelete(c.id)}
          >
            Delete
          </Button>
          <Link to={`createGame/${c.id}/createQuestions`}>
            <h2>{c.name}</h2>
          </Link>
        </Segment>
      </h2>
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
