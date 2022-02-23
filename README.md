
<!--  -->
# MongoDB Data Api - NodeJS Client Server

An API NodeJS server designed for people who just want to connect to their Mongodb cluster in an easy and effortless way.

<!--  -->
## License

[Apache-2.0](https://choosealicense.com/licenses/apache-2.0/)


-----------


<!--  -->
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code_of_conduct`.


-----------


<!--  -->
## Run server

#### Clone the project

```bash
  git clone https://github.com/migtam628/MongoDB-Data-API-NodeJS-Client mongoDBApiServer
```

#### Go to the project directory

```bash
  cd mongoDBApiServer
```

#### Obtain the URL Endpoint and API Key
![](https://raw.githubusercontent.com/migtam628/random_files/master/OBTAIN_API_KEY.png?token=GHSAT0AAAAAABRWG3MOHP6WBWJCG3QO2PP6YQZJCNA)

#### Add it to the `.env` file
```env
  URL_ENDPOINT=URL_GOES_HERE
  API_KEY=KEY_GOES_HERE
```

#### Install dependencies

```bash
  npm install
```
<br/>

### Option #1: Firebase functions deploy
<br/>

#### Install firebase-tools globally
```bash
  npm i -g firebase-tools
```
#### Login to your Firebase account
```bash
  firebase login
```
#### Initiate Firebase in the project
```bash
  firebase init
```
#### and finally deploy your function
```bash
  firebase deploy --only functions:<function-name>
```

<br/>

### Option #2: Run locally
<br/>

#### Add the port # to the `.env` file
```env
  PORT=PORT_GOES_HERE
```

#### Start the server

```bash
  npm run start
```

-----------

<!--  -->
## Endpoints

- `/api-key-generator` - Generates api key for usage
- `/find-one` - Fing a single doc
- `/find-all` - Find all docs
- `/insert-one` - Insert a single doc
- `/insert-many` - Insert multiple docs
- `/delete-one` - Delete a single doc
- `/delete-many` - Delete multiple docs
- `/update-one` - Update a single docs
- `/update-many` - Update multiple docs
- `/replace-one` - Replace a single docs
- `/aggregate` - Replace multiple docs

-----------

## API Reference


### Generate API Key
 You'll have to generate an API Key from the `/api-key-generator` endpoint before using the API.

```http
  POST /api-key-generator
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
| `length` | `number` | **Optional**. The length of the API Key expiration. |

##### Usage/Examples

```javascript
fetch("http://localhost:3000/api-key-generator", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "api_keys",
    database: "test_db",
    dataSource: "cluster",
    length: 365 // 365 = 1 yr, 730 = 2 yrs, etc
  }  
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    "status": "OK",
    "data": {
        "insertedId": "62103b0ecbb4fe74ac924feb",
        "apiKey": "b52aff1af3c58f0cd50b9ae5da66",
        "apiKeyExpiration": "2/19/2024, 12:34:22 AM"
    },
    "statusCode": 200
}
 */
```

<!--  -->

###  Find a single item in the collection
```http
  POST /find-one
```

| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
| `filter` | `object` | **Required**. Query for search |
| `projection` | `object` | **Optional**. Depending on the projection, the returned document will either omit specific fields or include only specified fields or values |


###### Usage/Examples
```javascript
fetch("http://localhost:3000/find-one", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    statusCode: 200,
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
}
 */
```

---

###  Get all items in the collection
```http
  POST /find-all
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |

###### Usage/Examples

```javascript
fetch("http://localhost:3000/find-all", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    statusCode: 200,
    data: {
      documents: [
        {
          _id: "347538673463"
          name: "Tony",
          age: 32,
          location: "Miami, FL"
        },
        {
          _id: "7346572365823",
          name: "Amanda",
          age: "32",
          location: "Hollywood, CA"
        }
      ]
    }
 }
 */
```
----

#### Insert one item to a collection

```http
  POST /insert-one
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
|`document`|`object`| **Required**.A document to insert into the collection. |

##### Usage/Examples
```javascript
fetch("http://localhost:3000/insert-one", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    document: {
        name: "Sandy"
        age: 30,.
        location: "Miami, FL"
    }
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    data: {
        "insertedId": "62118524c854e29de7b1bf7e"
    },
    statusCode: 200
}
 */
```


### Insert multiple items to a collection

```http
  POST /insert-many
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
|`documents`|`object[]`| **Required**. An array of documents to insert into the collection. |

##### Usage/Examples

```javascript
fetch("http://localhost:3000/insert-many", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    documents: [
      {
        
      }
    ]
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    data: {
        insertedIds: [
            "62118581c9a398f2d7e0b459",
            "62118581c9a398f2d7e0b45a"
        ]
    },
    statusCode: 200
}
 */
```


### Update one item in a collection

```http
  POST /update-one
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
| `filter` | `object` | **Required**. A MongoDB Query Filter. This modifies the first document in the collection that matches this filter. |
| `update` | `object` | **Required**. A MongoDB Update Expression that specifies how to modify the matched document. |
| `upsert` | `boolean` | **Required**. The upsert flag only applies if no documents match the specified filter. If true, the updateOne action inserts a new document that matches the filter with the specified update applied to it.|


##### Usage/Examples

```javascript
fetch("http://localhost:3000/update-one", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    },
    update: {
      name: "Tony Romas",
      age: 99
    }
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    data: {
        matchedCount: 1,
        modifiedCount: 1
    },
    statusCode: 200
}
 */
```


### Update multiple items in a collection

```http
  POST /update-many
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
| `filter` | `object` | **Required**. A MongoDB Query Filter. The updateMany action modifies all documents in the collection that match this filter. |
| `update` | `object` | **Required**. A MongoDB Update Expression that specifies how to modify matched documents. |
| `upsert` | `boolean` | **Required**. The upsert flag only applies if no documents match the specified filter. If true, the updateMany action inserts a new document that matches the filter with the specified update applied to it. |


##### Usage/Examples

```javascript
fetch("http://localhost:3000/update-many", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body:{
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    filter: {
      name: "unknown"
    },
    updates: {
      "$set": {
        "name": "ANNONYMOUS",
      }
    }
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    data: {
        matchedCount: 1,
        modifiedCount: 1
    },
    statusCode: 200
}
 */
```


### Delete one item in a collection

```http
  POST /delete-one
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
| `filter` | `object` | **Required**. 	
A MongoDB Query Filter. The deleteOne action deletes the first document in the collection that matches this filter. |

##### Usage/Examples

```javascript
fetch("http://localhost:3000/delete-one", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    "status": "OK",
    "data": {
        "deletedCount": 1
    },
    "statusCode": 200
}
 */
```

### Delete mnany items in a collection at the same time

```http
  POST /delete-many
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
| `filter` | `object` | **Required**. A MongoDB Query Filter. The deleteMany action deletes all documents in the collection that match this filter. |

##### Usage/Examples

```javascript
fetch("http://localhost:3000/delete-many", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    filter: { 
      status: "complete" 
    }
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    "status": "OK",
    "data": {
        "deletedCount": 1
    },
    "statusCode": 200
}
 */
```

### Replace one item in a collection

```http
  POST /replace-one
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
|`filter`|`object`|**Required**. A MongoDB Query Filter. The replaceOne action overwrites the first document in the collection that matches this filter.|
|`replacement`|`object`|**Required**. An EJSON document that overwrites the matched document.|
|`upsert`|`object`|**Required**. The upsert flag only applies if no documents match the specified filter. If true, the replaceOne action inserts the replacement document.|


##### Usage/Examples

```javascript
fetch("http://localhost:3000/replace-one", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    },
    repalcement: {
        name: "Tony Montana",
        age: 32
    }
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    "status": "OK",
    "data": {
        "matchedCount": 1,
        "modifiedCount": 1
    },
    "statusCode": 200
}
 */
```



### Aggregate on a collection

```http
  POST /aggregate
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
|`pipeline`|`object[]`|**Required**. A MongoDB Aggregation Pipeline. |


##### Usage/Examples

```javascript
fetch("http://localhost:3000/aggregate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    collection: "users",
    database: "test_db",
    dataSource: "cluster",
    apiKey: <pre-generated-api-key>,
    pipeline: [
      {
         $match: { age: 32 }
      },
      {
    		$group: { 
    			name: "$name", 
    			"totalQuantity": { 
    				"$sum": "$quantity" 
    			} 
    		}
		}
    ]
  }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    "status": "OK",
    "data": {
        "documents": [
            {
                "_id": "Tony Montana",
                "totalQuantity": 0
            }
        ]
    },
    "statusCode": 200
}
 */
```

-----------

## Authors

- [@migtam628](https://www.github.com/migtam628)


## Support

For support, email migtam628@gmail.com or join our Slack channel.


## Feedback

If you have any feedback, please reach out to us at migtam628@gmail.com


## Other projects

Here are some cool projects

[iOS-Capacitor-App-Tracking](https://github.com/migtam628/capacitor-ios-app-tracking)

[IMDB_Scraper_API](https://github.com/migtam628/IMDB_Scraper_API)

