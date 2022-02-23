import * as functions from "firebase-functions";
import * as express from "express";
import { apiKeyValidator } from "./apiKeyValidator";
import { Initialize } from "./Initialize";
import { Aggregate } from "./endpoints/Aggregate";
import { FindAll } from "./endpoints/FindAll";
import { FindOne } from "./endpoints/FindOne";
import { DeleteOne } from "./endpoints/DeleteOne";
import { UpdateOne } from "./endpoints/UpdateOne";
import { UpdateMany } from "./endpoints/UpdateMany";
import { DeleteMany } from "./endpoints/DeleteMany";
import { ReplaceOne } from "./endpoints/ReplaceOne";
import { InsertOne } from "./endpoints/InsertOne";
import { InsertMany } from "./endpoints/InsertMany";
import { apiKeyGenerator } from "./apiKeyGenerator";

const app: express.Application = express();
const port: any = process.env.PORT;

Initialize(app, port);

app.use(apiKeyValidator);
app.post("/aggregate", Aggregate);
app.post("/find-all", FindAll);
app.post("/find-one", FindOne);
app.post("/delete-many", DeleteMany);
app.post("/delete-one", DeleteOne);
app.post("/insert-one", InsertOne);
app.post("/update-one", UpdateOne);
app.post("/update-many", UpdateMany);
app.post("/insert-many", InsertMany);
app.post("/replace-one", ReplaceOne); 
app.post("/api-key-generator", apiKeyGenerator);

console.log(process.env.API_KEY);
console.log(process.env.URL_ENDPOINT);

export const mongoDBApiServer = functions.https.onRequest(app);
