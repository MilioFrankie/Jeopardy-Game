import React from "react";
import { Segment, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCard } from "../reducers/card";

class CardForm extends React.Component {
  state = { question: "", correctAnswer: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const question = { ...this.state };
    const { categoryId, dispatch } = this.props;
    debugger;
    dispatch(addCard(question, categoryId));
  };

  render() {
    const { question, correctAnswer } = this.state;
    return (
      <Segment raised inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="question"
              value={question}
              onChange={this.handleChange}
              placeholder="Enter Question"
              label="New Question"
            />
            <Form.Input
              fluid
              name="correctAnswer"
              value={correctAnswer}
              onChange={this.handleChange}
              placeholder="Enter Answer"
              label="Answer"
            />
          </Form.Group>
          <Form.Button color="green">Submit</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default connect()(CardForm);
