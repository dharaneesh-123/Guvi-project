// First, install the Redis client for Node.js using npm:
// npm install redis

// Require the Redis client library
const redis = require('redis');

// Create a Redis client
const client = redis.createClient({
  host: '127.0.0.1', // Redis server IP address
  port: 6379, // Redis server port
});

// Set a value in Redis
client.set('mykey', 'myvalue', (error, response) => {
  if (error) throw error;
  console.log('Value set successfully in Redis!');
});

// Retrieve a value from Redis
client.get('mykey', (error, response) => {
  if (error) throw error;
  console.log('Value retrieved from Redis: ' + response);
});

// Close the Redis client when done
client.quit();