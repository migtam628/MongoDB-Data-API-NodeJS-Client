
<!--  -->
# MongoDB Data Api - NodeJS Server

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
## Run Locally

#### Clone the project

```bash
  git clone https://github.com/migtam628/mongoApiServer.v.122
```

#### Go to the project directory

```bash
  cd mongoApiServer.v.122
```

#### Obtain the URL Endpoint and API Key
![](https://raw.githubusercontent.com/migtam628/random_files/master/OBTAIN_API_KEY.png?token=GHSAT0AAAAAABRWG3MOHP6WBWJCG3QO2PP6YQZJCNA)

#### Add it to the .env file
```env
URL_ENDPOINT=URL_GOES_HERE
API_KEY=KEY_GOES_HERE
```

#### Install dependencies

```bash
  npm install
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


### Generate API Key
 ```You'll have to generate an API Key from the `/api-key-generator` endpoint```

```http
  POST /api-key-generator
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |


### Usage/Examples

```javascript
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
}
 */
```

<!--  -->
## API Reference

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
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
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
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
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

##### Usage/Examples
```javascript
fetch("http://localhost:3000/insert-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    data: {
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
          _id: "3753645334",
          name: "Amanda",
          age: "32",
          location: "Hollywood, CA"
        }
      ]
   }
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

##### Usage/Examples

```javascript
fetch("http://localhost:3000/insert-many", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    documents: [
      {
        
      }
    ]
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    statusCode: 200,
    data: {
         document: {
            _id: "347538673463"
            name: "Tony",
            age: 32,
            location: "Miami, FL"
        }
    }
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


##### Usage/Examples

```javascript
fetch("http://localhost:3000/update-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    },
    update: {
      name: "Tony Romas",
      age: 99
    }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
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


##### Usage/Examples

```javascript
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
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

##### Usage/Examples

```javascript
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
}
 */
```

### Delete all items in a collection

```http
  POST /delete-all
```
| Body Param | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |

##### Usage/Examples

```javascript
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
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


##### Usage/Examples

```javascript
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
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


##### Usage/Examples

```javascript
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>,
    filter: {
        name: "Tony"
    }
}).then((res) => {
    console.log(res)
})

/*** EXAMPLE RESPONSE ***/
/* 
{
    status: "OK",
    document: {
        _id: "347538673463"
        name: "Tony",
        age: 32,
        location: "Miami, FL"
    }
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

