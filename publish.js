const PubNub = require('pubnub');
require('dotenv').config();

const pubnub = new PubNub({
  publishKey: process.env.PUBLISH_KEY,
  subscribeKey: process.env.SUBSCRIBE_KEY,
  logVerbosity: false,
});

pubnub.publish(
    {
        message: {
            such: 'test'
        },
        channel: process.env.CHANNEL,
    },
    function (status, response) {
        if (status.error) {
            // handle error
            console.log(status)
        } else {
            console.log("message Published w/ timetoken", response.timetoken)
        }
    }
);
