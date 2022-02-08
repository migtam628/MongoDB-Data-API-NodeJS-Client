import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function FindOne(req: any, res: any) {
  let filter = req.query.filter;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database || "ThePicks",
    dataSource: dataSource || "Cluster0",
    collection: collection || "users",
  };
  let request: TFindOneBody = {
    ...DefaultOptions,
    action: "findOne",
    filter: JSON.parse(filter),
  };
  if (filter)
    MongoDBAPIRequest(request, (r) => res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200})
    );
  else
    res.json({ statusCode: 422, error: "filter query is required" });
}
