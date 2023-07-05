
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


async function performAggregation(index) {
  const { body } = await client.search({
    index,
    body: {
      size: 0,
      aggs: {
        average_price: {
          avg: {
            field: 'price'
          }
        }
      }
    }
  });
  console.log('Average price:', body.aggregations.average_price.value);
}

performAggregation('products').catch(console.log);

async function performAggregation2(index) {
    const { body } = await client.search({
      index,
      body: {
        size: 0,
        aggs: {
          min_price: {
            min: {
              field: 'price'
            }
          }
        }
      }
    });
    console.log('Minimum price:', body.aggregations.min_price.value);
  }
  
  performAggregation2('products').catch(console.log);

  async function performAggregation3(index) {
    const { body } = await client.search({
      index,
      body: {
        size: 0,
        aggs: {
          max_price: {
            max:{
              field: 'price'
            }
          }
        }
      }
    });
    console.log('Maximum price:', body.aggregations.max_price.value);
  }
  
  performAggregation3('products').catch(console.log);