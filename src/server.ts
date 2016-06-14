// Import our logic
import { parse } from "./timestamp";

// Create our Express application
import * as Express from "express";
const app: Express.Application = Express();

// Configure router
const router: Express.Router = Express.Router();
router.get("/:input", function(req: Express.Request, res: Express.Response): void {
  res.send(parse(req.params.input));
});
app.use("/", router);

// Launch application
const port: number = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Timestamp server launched on port " + port);
});
