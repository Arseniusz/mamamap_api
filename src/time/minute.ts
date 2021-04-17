import { chain } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import * as t from "io-ts";

export const MinuteFromNumber = new t.Type<number, number, unknown>(
    "HourFromNumber",
    (n: unknown): n is number => !Number.isNaN(parseInt(n as string)),
    (n: unknown, ctx: t.Context) =>
        pipe(
            t.number.validate(n, ctx),
            chain((n: number) =>
                n > -1 && n < 59
                    ? t.success(n)
                    : t.failure(n, ctx, "Value should be in range from 0 to 59")
            )
        ),
    t.identity
);

export type Minute = t.TypeOf<typeof MinuteFromNumber>;
