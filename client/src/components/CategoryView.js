import React from "react";
import { connect } from "react-redux";
import CardForm from "./CardForm";
import { Segment, Header, Button } from "semantic-ui-react";
import { deleteCard } from "../reducers/card";

class CategoryView extends React.Component {
  handleDelete = (categoryId, id) => {
    const {
      dispatch,
      history: { push }
    } = this.props;
    debugger;
    dispatch(deleteCard(categoryId, id));
    push(`/createGame/${categoryId}/createQuestion`);
  };

  renderQuestions = () => {
    const { cards } = this.props;
    return cards.map(c => (
      <Segment raised>
        <Button
          onClick={() => this.handleDelete(c.category_id, c.id)}
          color="red"
          floated="right"
        >
          Delete
        </Button>
        <h1>Question: {c.question}</h1>
        <h3>Correct Answer: {c.correct_answer}</h3>
      </Segment>
    ));
  };

  render() {
    const { category } = this.props;
    const name = category ? category.name : "";
    const id = category ? category.id : "";
    return (
      <div>
        <h1>CREATE GAME</h1>
        <hr />
        <Header as="h1" textAlign="center">
          {name}
        </Header>
        <CardForm categoryId={id} />
        <Segment>{this.renderQuestions()}</Segment>
      </div>
    );
    // or this
    // return <div>{category && <h1>{category.name}</h1>}</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    category: state.category.find(
      c => c.id === parseInt(props.match.params.id)
    ),
    cards: state.card.filter(
      c => c.category_id === parseInt(props.match.params.id)
    )
  };
};

export default connect(mapStateToProps)(CategoryView);
