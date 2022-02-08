import * as crypto from "crypto";
import { MongoDBAPIRequest } from "./MongoDBAPIRequest";

export function apiKeyGenerator(req: any, res: any) {
  const apiKey = crypto.randomBytes(8).toString("hex");
  let request: TInsertOneBody = {
    action: "insertOne",
    collection: "apiKeys",
    database: "ThePicks",
    dataSource: "Cluster0",
    document: {
      apiKey: apiKey,
      apiKeyExpiration: new Date().getTime() + 1000 * 60 * 60 * 24 * 365,
    },
  };
  MongoDBAPIRequest(request, (r) =>
    res.json({
      status: r.name || "OK",
      data: r,
      apiKey: apiKey,
      statusCode: r.status || 200,
    })
  );
}
