import React from 'react';
import JointControl from './JointControl.jsx';
import PubNub from 'pubnub';

class App extends React.Component {
  constructor() {
    super();
    this.publishPubNubMessage = this.publishPubNubMessage.bind(this);
  }

  publishPubNubMessage({ joint, direction }) {
    console.log(`joint: ${joint}, direction: ${direction}`);
    // console.log(`proces.env.publish_key: ${process.env.CHANNEL}`)
  }

  render() {
    return (
      <div>
        <JointControl jointName="shoulder"
          publishPubNubMessage={this.publishPubNubMessage}
          />
        <JointControl jointName="elbow"
          publishPubNubMessage={this.publishPubNubMessage}
          />
      </div>
    )
  }
}

export default App;

// need to create multiple jointcontrol with different jointnames props and callback method props
