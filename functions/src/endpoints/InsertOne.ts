import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function InsertOne(req: any, res: any) {
  let document = req.body.document;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database || "ThePicks",
    dataSource: dataSource || "Cluster0",
    collection: collection || "users",
  };
  let request: TInsertOneBody = {
    ...DefaultOptions,
    action: "insertOne",
    document: document,
  };
  if (document)
    MongoDBAPIRequest(request, (r) =>
      res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200 })
    );
  else res.json({ statusCode: 422, error: "document query is required" });
}
