import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function Aggregate(req: any, res: any) {
  let pipeline = req.body.pipeline;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database || "ThePicks",
    dataSource: dataSource || "Cluster0",
    collection: collection || "users",
  };
  let request: TAggregateBody = {
    ...DefaultOptions,
    action: "aggregate",
    pipeline: pipeline,
  };
  if (pipeline)
    MongoDBAPIRequest(request, (r) => res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200})
    );
  else
    res.json({ statusCode: 422, error: "pipeline param is required" });
}
