import { chain } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import * as t from "io-ts";

export const HourFromNumber = new t.Type<number, number, unknown>(
    "HourFromNumber",
    (n: unknown): n is number => !Number.isNaN(parseInt(n as string)),
    (n: unknown, ctx: t.Context) =>
        pipe(
            t.number.validate(n, ctx),
            chain((n: number) =>
                n > -1 && n < 23
                    ? t.success(n)
                    : t.failure(n, ctx, "Value should be in range from 0 to 23")
            )
        ),
    t.identity
);

export type Hour = t.TypeOf<typeof HourFromNumber>;
