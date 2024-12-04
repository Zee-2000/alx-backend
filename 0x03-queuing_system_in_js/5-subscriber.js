import { createClient } from "redis";

const subscribe = createClient()

subscribe.on('connect', function()
{
    console.log("Redis client connected to the server")
})
subscribe,on('error', function(err)
{
    console.log(`Redis client not connected to the server : ${err}`)
})
subscribe.subscribe('holberton school channel')
subscribe.on('message', function(message, channel)
{
    if(message === 'KILL_SERVER')
    {
        subscribe.unsubscribe('holberton school channel')
        subscribe.extendPubSubListeners(true)
    }
})