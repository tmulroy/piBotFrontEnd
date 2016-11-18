const PubNub = require('pubnub');
require('dotenv').config();

const pubnub = new PubNub({
  subscribeKey: process.env.SUBSCRIBE_KEY,
  logVerbosity: false,
});

pubnub.addListener({
  message: (m) => {
    const channelName = m.channel;
    const msg = m.message;
    console.log('------------------------');
    console.log(`joint: ${msg.joint}`);
    console.log(`direction: ${msg.direction}`);

  },
  presence: (p) => {
    const channelName = p.channel;
    const publishTime = p.timestamp;
    const timetoken = p.timetoken;
    const uuid = p.uuid;
  },
  status: (s) => {
    console.log(`status: ${s}`)
  }
})

pubnub.subscribe({
  channels: [process.env.CHANNEL],
});
