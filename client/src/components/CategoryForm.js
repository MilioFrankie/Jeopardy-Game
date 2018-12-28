import React from "react";
import { Form, Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCategory, updateCategory } from "../reducers/category";

class CategoryForm extends React.Component {
  state = { name: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const category = { ...this.state };
    const { dispatch } = this.props;
    const func = this.props.id ? updateCategory : addCategory;
    dispatch(func(category));
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Input
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter Category Name"
              label="New Category Name"
            />
            <Form.Button color="green">Submit</Form.Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default connect()(CategoryForm);
