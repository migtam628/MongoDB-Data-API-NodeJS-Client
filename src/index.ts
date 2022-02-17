import * as functions from "firebase-functions";
import * as express from "express";
import { apiKeyValidator } from "./apiKeyValidator";
import { Initialize } from "./Initialize";

const app: express.Application = express();
Initialize(app);

app.use((req, res, next) => apiKeyValidator(req, res, next));

import("./endpoints/Aggregate").then((c) => {
  app.post("/aggregate", c.Aggregate);
});

import("./endpoints/FindAll").then((c) => {
  app.post("/find-all", c.FindAll);
});

import("./endpoints/FindOne").then((c) => {
  app.post("/find-one", c.FindOne);
});

import("./endpoints/DeleteMany").then((c) => {
  app.post("/delete-many", c.DeleteMany);
});

import("./endpoints/DeleteOne").then((c) => {
  app.post("/delete-one", c.DeleteOne);
});

import("./endpoints/InsertOne").then((c) => {
  app.post("/insert-one", c.InsertOne);
});

import("./endpoints/UpdateOne").then((c) => {
  app.post("/update-one", c.UpdateOne);
});

import("./endpoints/UpdateMany").then((c) => {
  app.post("/update-many", c.UpdateMany);
});

import("./endpoints/InsertMany").then((c) => {
  app.post("/insert-many", c.InsertMany);
});

import("./endpoints/ReplaceOne").then((c) => {
  app.post("/replace-one", c.ReplaceOne);
});

import("./apiKeyGenerator").then((c) => {
  app.post("/api-key-generator", c.apiKeyGenerator);
});

export const mongoDBApiServer = functions.https.onRequest(app);
