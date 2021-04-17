import * as Router from "koa-router";
import { Context } from "koa";
import { createPlace } from "./place";

const router: Router = new Router();

router.get("/", async (ctx: Context) => {
    ctx.body = {
        message: "Hello",
    };
});

router.post("/place", createPlace);

export default router;
