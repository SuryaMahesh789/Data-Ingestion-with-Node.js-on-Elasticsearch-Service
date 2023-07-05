
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



//   searching and retrieving data by name

  async function searchDocuments(index, query) {
    const { body } = await client.search({
      index,
      body: {
        query: {
          match: {
            'name': query
          }
        }
      }
    });
    console.log('Search results:', body.hits.hits);
  }
  

const index = 'my_index';
const query = 'John Doe';
searchDocuments(index, query);


//   searching and retrieving data by age

async function search_by_age(index2, query2) {
  const { body } = await client.search({
    index,
    body: {
      query: {
        match: {
          'age': query2
        }
      }
    }
  });
  console.log('Search results:', body.hits.hits);
}


const index2 = 'my_index';
const query2 = 32;
search_by_age(index2, query2);



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