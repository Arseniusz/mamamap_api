import { Context } from "koa";

export const createPlace = async (ctx: Context) => {
    const data = ctx.request.body;
    console.log("BODY", data);
    ctx.body = "KEK";
};
