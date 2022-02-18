
<!--  -->
# MongoDB Data Api - NodeJS Server

An API NodeJS server designed for people who just want to connect to their Mongodb cluster in an easy and effortless way.

<!--  -->
## License

[Apache-2.0](https://choosealicense.com/licenses/apache-2.0/)


<!--  -->
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code_of_conduct`.


<!--  -->
## Run Locally

Clone the project

```bash
  git clone https://github.com/migtam628/mongoApiServer.v.122
```

Go to the project directory

```bash
  cd mongoApiServer.v.122
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


<!--  -->
## Features

- Fing a single doc - `/find-one`
- Find all docs - `/find-all`
- Insert a single doc - `/insert-one`
- Insert multiple docs - `/insert-many`
- Delete a single doc - `/delete-one`
- Delete multiple docs - `/delete-many`
- Update a single docs - `/update-one`
- Update multiple docs - `/update-many`
- Replace a single docs - `/replace-one`
- Replace multiple docs - `/aggregate`
- Generates api key for usage - `/api-key-generator`


<!--  -->
## API Reference

### Find 1 item in the collection
```http
  POST /find-one
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |
| `filter` | `object` | **Required**. Query for search |
| `projection` | `object` | **Optional**. Depending on the projection, the returned document will either omit specific fields or include only specified fields or values |


##### Usage/Examples
```javascript
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>
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

### Get all items in the collection
```http
  POST /find-all
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |
| `database` | `string` | **Required**. The name of the database. |
| `collection` | `string` | **Required**. The name of the collection. |
| `dataSource` | `string` | **Required**. The name of the cluster. |

##### Usage/Examples

```javascript
fetch("http://localhost:3000/find-all", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>
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

### Insert one item to a collection

```http
  POST /insert-one
```
| Parameter | Type     | Description                |
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
fetch("http://localhost:3000/find-one", {
    collection: "users",
    database: "test",
    dataSource: "Cluster0",
    apiKey: <pre-generated-api-key>
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
| Parameter | Type     | Description                |
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
    apiKey: <pre-generated-api-key>
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
| Parameter | Type     | Description                |
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
    apiKey: <pre-generated-api-key>
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
| Parameter | Type     | Description                |
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
    apiKey: <pre-generated-api-key>
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
| Parameter | Type     | Description                |
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
    apiKey: <pre-generated-api-key>
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
| Parameter | Type     | Description                |
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
    apiKey: <pre-generated-api-key>
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
| Parameter | Type     | Description                |
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
    apiKey: <pre-generated-api-key>
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
## FAQ

### Do I need a MongoDB account?

Yes.

### Where do I get the api key for usage.

You will generate it by accessing the `/api-key-generator` endpoint.


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

