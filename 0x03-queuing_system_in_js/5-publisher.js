import { createClient } from "redis";

const publisher = createClient()

publisher.on('connect', function()
{
    console.log("Redis client connected to the server")
})
publisher.on('error', function(error)
{
    console.log(`Redis client not connected to the server: ${error}`)
})
function publishMessage(messsage, time)
{
    setTimeout(function()
{
    console.log(`About to send ${messsage}`)
    publisher.publish('holberton school channel', messsage)
}, time)
}
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);