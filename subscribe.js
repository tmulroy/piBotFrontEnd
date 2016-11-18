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
    console.log(`msg.direction: ${msg.direction}`)
  },
  presence: (p) => {
    const action = p.action;
    const channelName = p.channel;
    const occupancy = p.occupancy;
    const state = p.state;
    const channelGroup = p.subscription;
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
