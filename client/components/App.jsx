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
    const url = '/api';
    request.post(url)
      .send({
        joint,
        direction
      }).end((err, res) => {
        if (err) {
          console.log(`error: ${err}`)
        } else {
          console.log(`response: ${res}`)
        }
      })
  }

  render() {
    return (
      <div>
        <JointControl jointName="shoulder"
          publishPubNubMessage={this.publishPubNubMessage}
          id="shoulder"
          />
        <JointControl jointName="elbow"
          publishPubNubMessage={this.publishPubNubMessage}
          id="elbow"
          />
      </div>
    )
  }
}

export default App;
