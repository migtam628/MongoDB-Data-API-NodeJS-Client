import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export async function DeleteMany(req: any, res: any) {
  let filter = req.body.filter;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database,
    dataSource: dataSource,
    collection: collection
  };
  let request: TDeleteOneBody = {
    ...DefaultOptions,
    action: "deleteMany",
    filter: filter,
  };
  if (filter)
    await MongoDBAPIRequest(request, (r) => res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200})
    );
  else
    res.json({ statusCode: 422, error: "filter param is required" });
}
