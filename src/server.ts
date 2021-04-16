import * as Koa from "koa";
import { DefaultState, DefaultContext } from "koa";
import * as bodyParser from "koa-bodyparser";
import * as logger from "koa-logger";

const PORT = process.env.PORT ?? 5000;
const app: Koa<DefaultState, DefaultContext> = new Koa();

app.use(bodyParser());
app.use(logger());

const server = app
  .listen(PORT, async () => {
    console.log(`Mamamap API running on port ${PORT}`);
  })
  .on("error", (e: Error) => console.error(e));

export default server;
