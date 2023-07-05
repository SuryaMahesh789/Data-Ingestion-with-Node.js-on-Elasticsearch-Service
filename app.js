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
  
  const index = 'my_index';
  const document = { name: 'John Doe', age: 30 };
  
  indexDocument(index, document);
  
  const index2 = 'my_index2';
  const document2 = { name: 'Surya Mahesh', age: 30 };
  
  indexDocument(index2, document2);


  const index3 = 'my_index3';
  const document3 = { name: 'Pemma Koushik', age: 30 };
  
  indexDocument(index3, document3);

  const index4 = 'my_index4';
  const document4 = { name: 'John Doe', age: 30 };
  
  indexDocument(index4, document4);
  
  const index5 = 'my_index5';
  const document5 = { name: 'Surya Mahesh', age: 30 };
  
  indexDocument(index5, document5);


  const index6 = 'my_index6';
  const document6 = { name: 'Pemma Koushik', age: 30 };
  
  indexDocument(index6, document6);

