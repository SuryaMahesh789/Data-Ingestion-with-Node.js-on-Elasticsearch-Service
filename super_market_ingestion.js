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


async function indexDocument(index, document) {
    const { body } = await client.index({
      index,
      body: document
    });
  
    console.log('Document indexed:', body);
  }
  
  const index = 'products';
  
  const document1 = { name: 'Chocolates', price: 100,count_per_packet:4 };

  const document2 = { name: 'biscuits', price: 183,count_per_packet:20 };

  const document3 = { name: 'cakes', price: 201,count_per_packet:6 };

  const document4 = { name: 'ice_cream', price: 165,count_per_packet:7 };

  const document5 = { name: 'chips', price: 192,count_per_packet:50 };

  const document6 = { name: 'cookies', price: 199,count_per_packet:5 };


  indexDocument(index, document1);
  indexDocument(index, document2);
  indexDocument(index, document3);
  indexDocument(index, document4);
  indexDocument(index, document5);
  indexDocument(index, document6);

