import React from "react";
import { connect } from "react-redux";
import { Header, Segment, Button } from "semantic-ui-react";
import CategoryForm from "./CategoryForm";
import { getCategories, deleteCategory } from "../reducers/category";
import { Link } from "react-router-dom";

class Category extends React.Component {
  state = { showForm: false };

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm };
    });
  };

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
    const { showForm } = this.state;
    const { categories } = this.props;
    return categories.map(c => (
      <h2>
        <Segment raised>
          <Link to={`createGame/${c.id}/createQuestion`}>
            <Button color="green" floated="right">
              View
            </Button>
          </Link>
          {/* <Button.Group floated="right">
            <Button color="blue" onClick={this.toggleForm}>
              Edit
            </Button>
            <Button.Or /> */}
          <Button
            floated="right"
            color="red"
            onClick={() => this.handleDelete(c.id)}
          >
            Delete
          </Button>
          {/* </Button.Group> */}
          <h2>{c.name}</h2>
        </Segment>
      </h2>
    ));
  };

  render() {
    return (
      <div>
        <h1>CREATE GAME</h1>
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
