
const { Client } = require('@elastic/elasticsearch');
// node is elastic search endpoint 
const client = new Client(
    { 
        node: 'https://fd00c6370c694177acfcf3f8d663fb7d.us-central1.gcp.cloud.es.io',
        auth: {
                username: 'elastic',
                password: 'xhLARutkh41NExTC3iLODkuT'
              },
        ssl: {
            rejectUnauthorized: false
            }
    
    }
    );


async function read() {
  const { body } = await client.search({
    index: 'game-of-thrones',
    body: {
      query: {
        match: { quote: 'winter' }
      }
    }
  })
  console.log(body.hits.hits)
}

read().catch(console.log)