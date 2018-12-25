import React from "react";
import { Segment, Form } from "semantic-ui-react";
import { connect } from "react-redux";

class QuestionForm extends React.Component {
  state = { question: "", correctAnswer: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
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

export default connect()(QuestionForm);
