import * as t from "io-ts"
import { TimeFromNumbers } from "./time"

export const TimeRangeCodec = t.type({
    from: TimeFromNumbers,
    to: TimeFromNumbers
})

export type TimeRange = t.TypeOf<typeof TimeRangeCodec>;
