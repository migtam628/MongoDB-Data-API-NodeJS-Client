import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function InsertMany(req: any, res: any) {
  let documents = req.body.documents;
  let collection = req.body.collection;
  let database = req.body.database;
  let dataSource = req.body.dataSource;
  var DefaultOptions: IDefaultBody = {
    database: database,
    dataSource: dataSource,
    collection: collection
  };
  let request: TInsertManyBody = {
    ...DefaultOptions,
    action: "insertMany",
    documents: documents,
  };
  if (documents)
    MongoDBAPIRequest(request, (r) => res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200})
    );
  else
    res.json({ statusCode: 422, error: "documents query is required" });
}
