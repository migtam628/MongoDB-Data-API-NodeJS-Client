import { MongoDBAPIRequest } from "./MongoDBAPIRequest";

// create a api key validator middleware function to be used in all endpoints

export const apiKeyValidator = (req: any, res: any, next: any) => {
	const apiKey = req.query.apiKey || req.body.apiKey;
	const {  database, dataSource } = req.body;
	let request: TFindOneBody = {
		action: "findOne",
		collection: 'apiKeys',
		database: database,
		dataSource: dataSource,
		filter: { apiKey: apiKey },
	};
	if (req.url === "/api-key-generator") next();
	else if (!apiKey) {
		res.status(401).json({
			statusCode: 401,
			error: "Unauthorized",
			msg: "No API Key",
		});
		return;
	}
	MongoDBAPIRequest(request, (r) => { 
		if (apiKey === r.document?.apiKey!) {
			next();
		} else {
			res.status(401).json({
				statusCode: 401,
				error: "Unauthorized",
				msg: "Invalid API Key",
			});
      return
		}
	});
};
