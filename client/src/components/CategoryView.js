import React from "react";
import { connect } from "react-redux";
import CardForm from "./CardForm";
import { Segment } from "semantic-ui-react";

class CategoryView extends React.Component {
  renderQuestions = () => {
    const { cards } = this.props;
    return cards.map(c => (
      <Segment>
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
        <h1>{name}</h1>
        <hr />
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
