const PubNub = require('pubnub');

class PubnubMachine {
  constructor() {
    this.pubnub = new PubNub({
      publishKey: process.env.PUBLISH_KEY,
      logVerbosity: false,
    })
  }

  sendMessage() {
    this.pubnub.publish({
      
    })
  }
}
