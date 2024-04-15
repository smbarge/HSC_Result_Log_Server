const pulsar = require("pulsar-client");
const doit = async () => {
  // Create a Pulsar client instance
  const client = new pulsar.Client({
    serviceUrl: "pulsar://localhost:6650", // Change this URL according to your Pulsar setup
  });
  console.log("client created");
  // Create a producer
  const producer = await client.createProducer({
    topic: "your-topic-name", // Change this to your desired topic
  });
  console.log("producer created");

  // Send a message
  const message = {
    // data: "Hello, Pulsar!",
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };
  producer
    .send({
      data: Buffer.from(JSON.stringify(message)),
    })
    .then(() => {
      console.log("Message sent successfully");
    })
    .catch((err) => {
      console.error("Error sending message:", err);
    })
    .finally(() => {
    //   producer.close();
      client.close();
    });

  // Close the producer and client when done
};

doit();
