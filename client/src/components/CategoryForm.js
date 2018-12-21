import React from "react";
import { Form, Segment, Header } from "semantic-ui-react";

class CategoryForm extends React.Component {
  state = { name: "" };

  render() {
    const { name } = this.state;
    return (
      <div>
        <Segment inverted>
          <Form inverted>
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
        <Header as="h1" textAlign="center">
          YOUR CATEGORIES
        </Header>
        <hr />
        <Segment>
          <h3>Generate list of catgories as links here</h3>
        </Segment>
      </div>
    );
  }
}

export default CategoryForm;
