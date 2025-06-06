// Worker script for heavy computation
self.onmessage = (e) => {
  let t = 0;
  for (let i = 0; i < 1e8; i++) {
    t += i;
  }
  self.postMessage(t);
};

// Make this file a module
export {}; 