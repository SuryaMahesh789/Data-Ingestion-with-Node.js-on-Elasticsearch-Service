# Data-Ingestion-with-Node.js-on-Elasticsearch-Service
Ingest data with Node.js on Elasticsearch Service
This guide tells you how to get started with:

Securely connecting to Elasticsearch Service with Node.js
Ingesting data into your deployment from your application
Searching and modifying your data on Elasticsearch Service

Get Elasticsearch Service
Get a free trial.
Log into Elastic Cloud.
Select Create deployment.
Give your deployment a name. You can leave all other settings at their default values.
Select Create deployment and save your Elastic deployment credentials. You need these credentials later on.
When the deployment is ready, click Continue and a page of Setup guides is displayed. To continue to the deployment homepage click I’d like to do something else.

Set up your application
These steps are applicable to your existing application. If you don’t have one, use the example included here to create one.

Create the npm package.json file
* npm init
Get the elasticsearch and config packages
* npm install @elastic/elasticsearch
* npm install config
Create a configuration file
* mkdir config
* vi config/default.json
The example here shows what the config package expects. You need to update config/default.json with your deployment details in the following sections:

{
  "elastic": {
    "cloudID": "DEPLOYMENT_NAME:CLOUD_ID_DETAILS", 
    "username": "elastic",
    "password": "LONGPASSWORD"
  }
}

![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/b5287fa0-0e7e-4a24-bd23-5ab59e09b1cb)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/5739c9b4-10dd-4bc4-8202-0e7543bafbc8)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/dd47cd60-a544-4963-a795-657ed0a065da)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/744449bd-938d-4756-b0b0-1f170179f8ad)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/9c4c1e8c-b9f5-4195-b24e-2185c659968d)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/c03a0aa6-92ff-425b-977a-7ee062cfe1f2)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/77f5751d-d12b-4f74-b1bc-bb193c66c28d)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/096d183b-d06f-44f9-a083-8ee2cf9e57d1)

![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/4bf35e11-d67d-405c-8f03-66bbca5ead04)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/d9524dfb-8888-4693-bc96-c732ad027d83)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/0a7f2868-db0f-45e6-ab5b-d8c765be2d24)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/6bccd659-5090-42ed-89d3-7deb07cab24d)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/e9787e97-a2fa-4a76-8e83-b4082a2e3280)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/da87c29e-0b57-4826-aac6-3fab863abca9)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/572da00e-d6d8-40d0-8741-86202ce4fbc4)
![image](https://github.com/SuryaMahesh789/Data-Ingestion-with-Node.js-on-Elasticsearch-Service/assets/101471548/5aefc183-7870-4b68-934d-f72fac13a77e)

