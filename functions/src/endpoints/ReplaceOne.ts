import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function ReplaceOne(req: any, res: any) {
  let filter = req.body.filter;
  let replacement = req.body.replacement;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database,
    dataSource: dataSource,
    collection: collection,
  };
  let request: TReplaceOneBody = {
    ...DefaultOptions,
    action: "replaceOne",
    filter: filter,
    replacement: replacement,
  };
  if (filter && replacement)
    MongoDBAPIRequest(request, (r) =>
      res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200 })
    );
  else
    res.json({
      statusCode: 422,
      error: "filter and document params are required",
    });
}
