const PubNub = require('pubnub');

class PubnubMachine {
  constructor() {
    this.channel = process.env.CHANNEL;
    this.pubnub = new PubNub({
      publishKey: process.env.PUBLISH_KEY,
      subscribeKey: process.env.SUBSCRIBE_KEY,
      logVerbosity: false,
    });
  }

  sendMessage({ direction, joint }) {
    return new Promise((resolve, reject) => {
      this.pubnub.publish(
        {
          message: {
            direction,
            joint,
          },
          channel: this.channel,
        }, (status, response) => {
          if(status.error) {
            reject(status.error);
          } else {
              resolve(response);
          }
        }
      );
    });
  }
}

module.exports = PubnubMachine;
