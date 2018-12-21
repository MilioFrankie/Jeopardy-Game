import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item
          name="Jeopardy"
          active={activeItem === "Jeopardy"}
          onClick={this.handleItemClick}
        >
          <Link to="">Jeopardy</Link>
        </Menu.Item>
        <Menu.Item
          name="createGame"
          active={activeItem === "createGame"}
          onClick={this.handleItemClick}
        >
          <Link to="/categoryForm">Create Game</Link>
        </Menu.Item>
        <Menu.Item
          name="play"
          active={activeItem === "play"}
          onClick={this.handleItemClick}
        >
          <Link to="">Play</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
