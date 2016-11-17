import React from 'react';

const propTypes = {
  jointName: React.PropTypes.string,
  publishPubNubMessage: React.PropTypes.func,
}

class JointControl extends React.Component {
  constructor() {
    super();
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  }

  buttonClickHandler(e) {
    const direction = e.target.name;
    const joint = this.props.jointName;
    const commandObj = {
      joint,
      direction,
    }
    this.props.publishPubNubMessage(commandObj);
  }

  render() {
    return (
      <div className="joint-buttons" id={this.props.jointName}>
        <button
          onClick={this.buttonClickHandler}
          name="up">Up</button>
        <button
          onClick={this.buttonClickHandler}
          name="down">Down</button>
        <button
          onClick={this.buttonClickHandler}
          name="left">Left</button>
        <button
          onClick={this.buttonClickHandler}
          name="right">Right</button>
      </div>
    )
  }
}

JointControl.propTypes = propTypes;
export default JointControl;
