const { Client } = require('@elastic/elasticsearch');
const client = new Client({
  node: 'https://fd00c6370c694177acfcf3f8d663fb7d.us-central1.gcp.cloud.es.io',
  auth: {
    username: 'elastic',
    password: 'xhLARutkh41NExTC3iLODkuT'
  },
  ssl: {
    rejectUnauthorized: false
  }
});

client.info()
  .then(response => console.log(response))
  .catch(error => console.error(error))



async function run() {
  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Ned Stark',
    quote: 'Winter is coming.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Daenerys Targaryen',
    quote: 'I am the blood of the dragon.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Tyrion Lannister',
    quote: 'A mind needs books like a sword needs whetstone.'
    }
  })

  await client.indices.refresh({index: 'game-of-thrones'})
}

run().catch(console.log)