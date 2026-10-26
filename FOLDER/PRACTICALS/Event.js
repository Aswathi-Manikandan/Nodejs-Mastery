const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// Listen for an event
emitter.on("orderPlaced", () => {
    console.log("Order received!");
});

// Trigger the event
emitter.emit("orderPlaced");