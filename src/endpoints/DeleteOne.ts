import { MongoDBAPIRequest } from "../MongoDBAPIRequest";
import { Request, Response } from "express";
export function DeleteOne(
  req: Request & {
    body: {
      action: string;
      collection: string;
      database: string;
      dataSource: string;
      filter: ObjectConstructor;
    };
  },
  res: Response
) {
  let { filter, collection, database, dataSource } = req.body;
  var DefaultOptions: IDefaultBody = {
    database: database,
    dataSource: dataSource,
    collection: collection,
  };
  let request: TDeleteOneBody = {
    ...DefaultOptions,
    action: "deleteOne",
    filter: filter,
  };
  if (filter)
    MongoDBAPIRequest(request, (r) =>
      res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200 })
    );
  else res.json({ statusCode: 422, error: "filter param is required" });
}
