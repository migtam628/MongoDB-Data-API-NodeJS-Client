import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function UpdateOne(req: any, res: any) {
  let filter = req.body.filter;
  let update = req.body.update;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database || "ThePicks",
    dataSource: dataSource || "Cluster0",
    collection: collection || "users",
  };
  let request: TUpdateBody = {
    ...DefaultOptions,
    action: "updateOne",
    filter: filter,
    update: update,
  };
  if (filter && update)
    MongoDBAPIRequest(request, (r) =>
      res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200 })
    );
  else
    res.json({
      statusCode: 422,
      error: "filter and update params are required",
    });
}
