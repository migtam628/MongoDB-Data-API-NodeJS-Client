import { MongoDBAPIRequest } from "../MongoDBAPIRequest";

export function FindAll(req: any, res: any) {
  let collection:any = req.body.collection;
  let database:any = req.body.database;
  let dataSource:any = req.body?.dataSource!;
  var DefaultOptions: IDefaultBody = {
    database: database || "ThePicks",
    dataSource: dataSource || "Cluster0",
    collection: collection || "users",
  };
  let request: TFindBody = {
    ...DefaultOptions,
    action: "find",
    filter: {},
  };
    MongoDBAPIRequest(request, (r) => res.json({ status: r.name || "OK", data: r, statusCode: r.status || 200})
  );
}
