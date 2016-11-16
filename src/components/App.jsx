import React from 'react';
import JointControl from './JointControl.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <JointControl jointName="shoulder"/>
        <JointControl jointName="elbow" />  
      </div>
    )
  }
}

export default App;

// need to create multiple jointcontrol with different jointnames props and callback method props
