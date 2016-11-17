import React from 'react';

const propTypes = {
  jointName: React.PropTypes.string,
  publishPubNubMessage: React.PropTypes.func,
}
const JointControl = (props) => {
  return (
    <div className="joint-buttons" id={props.jointName}>
      <button>Up</button>
      <button>Down</button>
      <button>Left</button>
      <button>Right</button>
    </div>
  )
}

JointControl.propTypes = propTypes;
export default JointControl;
