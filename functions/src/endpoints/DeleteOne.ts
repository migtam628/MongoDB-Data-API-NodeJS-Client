import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function DeleteOne(req: any, res: any) {
  let filter = req.body.filter;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database || "ThePicks",
    dataSource: dataSource || "Cluster0",
    collection: collection || "users",
  };
  let request: TDeleteOneBody = {
    ...DefaultOptions,
    action: "deleteOne",
    filter: filter,
  };
  if (filter)
    MongoDBAPIRequest(request, (r) => res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200})
    );
  else
    res.json({ statusCode: 422, error: "filter param is required" });
}
