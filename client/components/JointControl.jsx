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
          name="up"
          id="up">UP</button>
        <button
          onClick={this.buttonClickHandler}
          name="down"
          id="down">DOWN</button>
        <button
          onClick={this.buttonClickHandler}
          name="left"
          id="left">LEFT</button>
        <button
          onClick={this.buttonClickHandler}
          name="right"
          id="right">RIGHT</button>
      </div>
    )
  }
}

JointControl.propTypes = propTypes;
export default JointControl;
