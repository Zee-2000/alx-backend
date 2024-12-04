import { createClient, print } from "redis";

const redisClient = createClient()
redisClient.on('connect', function() {
    console.log('Redis client connected to the server');
  });
  
  redisClient.on('error', function(error) {
    console.log(`Redis client not connected to the server: ${error}`);
  });
  redisClient.hSet('HolbertonSchools', 'Portland', '50', print)
  redisClient.hSet('HolbertonSchools', 'Seattle', '80', print)
  redisClient.hSet('HolbertonSchools', 'NewYork', '20', print)
  redisClient.hSet('HolbertonSchools', 'Bogota', '20', print)
  redisClient.hSet('HolbertonSchools', 'Cali', '40', print)
  redisClient.hSet('HolbertonSchools', 'Paris', '2', print)

  //reterive all elements
  redisClient.hGetAll('HolbertonSchools', function(error, result)
{
    if(error)
    {
        console.log(error)
        throw error
    }
    console,log(result)
})