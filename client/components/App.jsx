import React from 'react';
import JointControl from './JointControl.jsx';
import PubNub from 'pubnub';
import request from 'superagent';

class App extends React.Component {
  constructor() {
    super();
    this.publishPubNubMessage = this.publishPubNubMessage.bind(this);
  }

  publishPubNubMessage({ joint, direction }) {
    console.log(`joint: ${joint}, direction: ${direction}`);
    const url = '/api';
    request.post(url)
      .send({
        joint,
        direction
      }).end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
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
