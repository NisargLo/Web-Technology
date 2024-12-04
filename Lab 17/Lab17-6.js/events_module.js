// Demonstrate “events” core module in NodeJS.

/*
     EventEmitter is a class that allows objects to emit named events and register listeners for those events.
     
     Emit: Trigger an event.
     On: Register a listener for an event.
     Once: Register a listener that will only be called once.
     Off: Remove a listener.
*/

const EventEmitter = require('events');

let i=1;

// Create a custom class extending EventEmitter
class MyEmitter extends EventEmitter {
     startTicks(){
          setInterval(() => {
               console.log('Hello World '+(i++));
          }, 1000);
     }
}

const my_emit = new MyEmitter();

// Register a listener
my_emit.on('event', function(){
     console.log(this.value+i); 
     // 'Hello World 1'
     // 'Hello World 2'...
});

// Emit the event
my_emit.startTicks('event');
