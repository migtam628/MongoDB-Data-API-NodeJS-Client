import * as crypto from "crypto";
import { MongoDBAPIRequest } from "./MongoDBAPIRequest";

export function apiKeyGenerator(req: any, res: any) {
  const apiKey = crypto.randomBytes(getRandomInt(12, 16)).toString("hex");
  const { collection, database, dataSource, length } = req.body;
  let request: TInsertOneBody = {
    action: "insertOne",
    collection: collection,
    database: database,
    dataSource: dataSource,
    document: {
      apiKey: apiKey,
      apiKeyExpiration: new Date().getTime() + 1000 * 60 * 60 * 24 * length || 365,
    },
  };

  function respond400(r: any) {
    res.status(400).json({
      statusCode: 400,
      error: "Bad Request",
      msg: `No ${r} provided`,
    });
    return;
  }

  if (collection.length < 1) respond400("collection");
  if (database.length < 1) respond400("database");
  if (dataSource.length < 1) respond400("dataSource");

  MongoDBAPIRequest(request, (r) =>
    res.json({
      status: r.name || "OK",
      data: {
        ...r,
        apiKey: apiKey,
        apiKeyExpiration: msToDays(
          new Date().getTime() + 1000 * 60 * 60 * 24 * length || 365
        ),
      },
      statusCode: r.status || 200,
    })
  );
}

function msToDays(ms: number) {
  const date = new Date(ms).toLocaleString();
  return date;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
