import React from 'react';

const propTypes = {
  jointName: React.PropTypes.string,
  publishPubNubMessage: React.PropTypes.func,
}
const JointControl = (props) => {
  return (
    <div className="joint-buttons" id={props.jointName}>
      <button onClick={props.publishPubNubMessage}>Up</button>
      <button onClick={props.publishPubNubMessage}>Down</button>
      <button onClick={props.publishPubNubMessage}>Left</button>
      <button onClick={props.publishPubNubMessage}>Right</button>
    </div>
  )
}

JointControl.propTypes = propTypes;
export default JointControl;
