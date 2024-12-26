// This is your SharedWorker script
self.onmessage = function(event) {
  // Handle messages from main thread
  self.postMessage(`Received: ${event.data}`);
};