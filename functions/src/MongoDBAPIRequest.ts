import axios, { AxiosRequestConfig } from "axios";

export async function MongoDBAPIRequest(
  requestBody: TMongoAPIBody & IDefaultBody,
  callback?: (e: any) => any
) {
  var DATA: { results: any; error: any } = {
    results: undefined,
    error: undefined,
  };
  const body = getMongoDBRequestBody(requestBody);
  const config: AxiosRequestConfig = {
    method: "post",
    url: `https://data.mongodb-api.com/app/data-caeec/endpoint/data/beta/action/${requestBody.action}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "AjRIguY1Nxm5IAFvNbZuLzizEeLEdtwDqBHzIrsuhaY5LTsrGSIThnX91G8fRfPA",
    },
    data: body,
  };

  axios(config)
    .then((response) => {
      DATA.results = response.data;
      if (callback) callback(response.data);
    })
    .catch((error) => {
      DATA.results = error;
      if (callback) callback(error);
    });

  return DATA;
}

function getMongoDBRequestBody(body: TMongoAPIBody & IDefaultBody) {
  const {
    dataSource,
    database,
    collection,
    action,
    filter,
    document,
    projection,
    documents,
    skip,
    sort,
    replacement,
    update,
    upsert,
    limit,
    pipeline,
  }: TMongoAPIBody & IDefaultBody = body;
  const DefaultOptions: IDefaultBody = {
    collection: collection,
    database: database,
    dataSource: dataSource,
  };
  const data =
    action === "findOne"
      ? {
          ...DefaultOptions,
          filter: filter,
          projection: projection,
        }
      : action === "find"
      ? {
          ...DefaultOptions,
          filter: filter,
          projection: projection,
          sort: sort,
          limit: limit,
          skip: skip,
        }
      : action === "insertOne"
      ? {
          ...DefaultOptions,
          document: document,
        }
      : action === "insertMany"
      ? {
          ...DefaultOptions,
          documents: documents,
        }
      : action === "updateOne"
      ? {
          ...DefaultOptions,
          filter: filter,
          update: update,
          upsert: upsert,
        }
      : action === "updateMany"
      ? {
          ...DefaultOptions,
          filter: filter,
          update: update,
          upsert: upsert,
        }
      : action === "replaceOne"
      ? {
          ...DefaultOptions,
          filter: filter,
          replacement: replacement,
          upsert: upsert,
        }
      : action === "deleteOne"
      ? {
          ...DefaultOptions,
          filter: filter,
        }
      : action === "deleteMany"
      ? {
          ...DefaultOptions,
          filter: filter,
        }
      : action === "aggregate"
      ? {
          ...DefaultOptions,
          pipeline: pipeline,
        }
      : {
          ...DefaultOptions,
          filter: filter,
          projection: projection,
          sort: sort,
          limit: limit,
          skip: skip,
        };
  return data;
}
