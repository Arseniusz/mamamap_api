import * as t from "io-ts";
import { HourFromNumber } from "./hour";
import { MinuteFromNumber } from "./minute";

export const TimeFromNumbers = t.tuple([HourFromNumber, MinuteFromNumber]);
export type Time = t.TypeOf<typeof TimeFromNumbers>;
