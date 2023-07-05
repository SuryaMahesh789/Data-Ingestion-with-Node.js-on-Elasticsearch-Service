
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


    // getting document id with the query within the index and updating its name and price
    async function getDocumentIdByQuery(index, query) {
        const { body } = await client.search({
          index,
          body: {
            query
          }
        });
      
        if (body.hits.total.value === 0) {
          throw new Error('Document not found');
        }
      
        const documentId = body.hits.hits[0]._id;
        return documentId;
      }
      
      async function updateDocumentByQuery(index, query, updateFields) {
        const documentId = await getDocumentIdByQuery(index, query);
      
        const { body } = await client.update({
          index,
          id: documentId,
          body: {
            doc: updateFields
          }
        });
      
        console.log('Document updated:', body.result);
      }
      
    //   index is products index 
      const index = 'products';

    //   getting all the documents named 'Chocolates' and updating its name to choco chips and price from 100 to 99.99
      const query = { term: { name: 'Chocolates' } };
      const updateFields = { name: 'choco-chips', price: 99.99 };
      

      updateDocumentByQuery(index, query, updateFields);
      