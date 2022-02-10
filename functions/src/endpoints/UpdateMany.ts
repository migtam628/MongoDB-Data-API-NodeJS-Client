import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function UpdateMany(req: any, res: any) {
  let filter = req.body.filter;
  let update = req.body.update;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database,
    dataSource: dataSource,
    collection: collection
  };
  let request: TUpdateManyBody = {
    ...DefaultOptions,
    action: "updateMany",
    filter: filter,
    update: update,
  };
  if (filter && update)
    MongoDBAPIRequest(request, (r) => res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200})
    );

  else
    res.json({
      statusCode: 422,
      error: "filter and update params are required",
    });
}
