import React from "react";
import { connect } from "react-redux";
import CardForm from "./CardForm";

class CategoryView extends React.Component {
  render() {
    const { category } = this.props;

    const name = category ? category.name : "";
    const id = category ? category.id : "";
    return (
      <div>
        <h1>{name}</h1>
        <hr />
        <CardForm categoryId={id} />
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
