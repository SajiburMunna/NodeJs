const EventEmitter=require('events')

class Sum extends EventEmitter{
    startSum( ){
        console.log('sum is running...')
        // raise an event
        this.emit('sum',1,2)
    }
}

module.exports = Sum;