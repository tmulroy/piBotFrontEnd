import React from 'react';
import JointControl from './JointControl.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.publishPubNubMessage = this.publishPubNubMessage.bind(this);
  }

  publishPubNubMessage() {
    console.log('hello from publishPubNubMessage')
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
