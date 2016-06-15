/** Provides function to create and start an Express server */

import * as Express from "express";

import { parse } from "./timestamp";

/** Create and start a timestamp server on the given port (which is returned) */
export function startServer(port: number): Express.Application {

  const app: Express.Application = Express();

  const router: Express.Router = Express.Router();
  router.get("/:input", function(req: Express.Request, res: Express.Response): void {
    res.send(parse(req.params.input));
  });
  router.get("/:input", function(req: Express.Request, res: Express.Response): void {
    res.send("");
  });

  app.use("/", router);

  app.listen(port);
  // console.log("Timestamp server listening on", port);

  return app;

}
