import React from "react";
import { connect } from "react-redux";
import QuestionForm from "./QuestionForm";

class CategoryView extends React.Component {
  render() {
    const { category } = this.props;

    const name = category ? category.name : "";
    return (
      <div>
        <h1>{name}</h1>
        <hr />
        <QuestionForm />
      </div>
    );
    // or this
    // return <div>{category && <h1>{category.name}</h1>}</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    category: state.category.find(c => c.id === parseInt(props.match.params.id))
  };
};

export default connect(mapStateToProps)(CategoryView);
