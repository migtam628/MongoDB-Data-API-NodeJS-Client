import * as cors from "cors";
import * as bodyParser from "body-parser";

export function Initialize(app: any, port?: number) {
  app.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  app.set("Access-Control-Allow-Headers", "Content-Type");
  app.set("Access-Control-Allow-Origin", "*");
  app.set("Content-Type", "application/json");
  app.set("Content-Type", "text/html");
  app.set("Content-Type", "application/x-www-form-urlencoded");
  app.set("Connection", "keep-alive");
  app.set("X-Powered-By", "Express");

  app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.raw());

  if (port)
    app.listen(port, () => {
      console.log("http://localhost:3000");
    });
}
