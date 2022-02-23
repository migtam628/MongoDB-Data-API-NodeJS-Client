import { MongoDBAPIRequest } from "./MongoDBAPIRequest";

// create a api key validator middleware function to be used in all endpoints

export const apiKeyValidator = (req: any, res: any, next: any) => {
  const apiKey = req.query.apiKey || req.body.apiKey; 
	const { collection, database, dataSource } = req.body;
  let request: TFindOneBody = {
    action: "findOne",
		collection: collection,
		database: database,
		dataSource: dataSource,
    filter: { apiKey: apiKey },
  };
  if (req.url === "/api-key-generator") next();
  else {
    if (!apiKey) {
      res.status(401).json({
        statusCode: 401,
        error: "Unauthorized",
        msg: "No API Key",
      });
      return;
    }
    MongoDBAPIRequest(request, (r) => {
      console.log(r);
      if (
        apiKey === r.document?.apiKey &&
        r.document?.apiKeyExpiration > new Date().getTime()
      ) {
        next();
      } else {
        res.status(401).json({
          statusCode: 401,
          error: "Unauthorized",
          msg: "Invalid or Expired API Key",
        });
      }
    });
  }
};
