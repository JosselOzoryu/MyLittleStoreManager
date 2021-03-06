//Core imports
import React from "react";

//Components
import Paper from '@material-ui/core/Paper';

//Styling imports
import "./SideBar.scss";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value.trimLeft()
    });
    this.props.onSearch(event.target.value.trimLeft());
  };

  render() {
    const { children, title } = this.props;
    return (
      <Paper className="side-bar">
        <div className="side-bar__title-container">
          <div className="side-bar__title-container--value">{title}</div>
        </div>
        <div className="side-bar__search-container">
          <div className="side-bar__search-container--input">
            <i className="fas fa-search" />
            <input
              className="side-bar__search-container--input-element"
              type="text"
              name="Search"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="side-bar__content-container">{children}</div>
      </Paper>
    );
  }
}

export default SideBar;
