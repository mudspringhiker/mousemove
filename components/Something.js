import React from "react";

class Something extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldHide: false
    };
    this.timerId = null;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.hidingTimer = this.hidingTimer.bind(this);
  }

  hidingTimer() {
    this.timerId = setTimeout(() => {
      this.setState({ shouldHide: true });
    }, 2000);
  }

  componentDidMount() {
    this.hidingTimer();
  }

  handleMouseMove() {
    clearTimeout(this.timerId);
    this.setState({
      shouldHide: false
    });
    this.hidingTimer();
  }

  render() {
    return (
      <div>
        <div onMouseMove={this.handleMouseMove}>
          <h1>Move here</h1>
          <div className={this.state.shouldHide ? "hidden" : "none"}>
            <h1>I should hide</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Something;
