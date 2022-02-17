import * as crypto from "crypto";
import { MongoDBAPIRequest } from "./MongoDBAPIRequest";

export function apiKeyGenerator(req: any, res: any) {
  const apiKey = crypto.randomBytes(8).toString("hex");
  const { collection, database, dataSource } = req.body;
  let request: TInsertOneBody = {
    action: "insertOne",
    collection: collection,
    database: database,
    dataSource: dataSource,
    document: {
      apiKey: apiKey,
      apiKeyExpiration: new Date().getTime() + 1000 * 60 * 60 * 24 * 365,
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
      data: r,
      apiKey: apiKey,
      statusCode: r.status || 200,
    })
  );
}
