const pulsar = require("pulsar-client");

const consumeMessage = async () => {
  try {
    // Create a Pulsar client instance
    const client = new pulsar.Client({
      serviceUrl: "pulsar://localhost:6650", // Change this URL according to your Pulsar setup
    });
    console.log("Client created");

    // Create a consumer
    const consumer = await client.subscribe({
      topic: "your-topic-name", // Change this to your desired topic
      subscription: "your-subscription-name", // Change this to your desired subscription name
    });
    console.log("Consumer created");
    while (true) {
      const msg = await consumer.receive();
      console.log(msg.getData().toString());
    }
    // Listen for messages
  } catch (e) {
    console.log("exception in consuming message: ", e);
  }
};
consumeMessage();
