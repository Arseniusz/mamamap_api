import * as io from "io-ts";

export const CoordinatesCodec = io.tuple([io.number, io.number]);
export type Coordinates = io.TypeOf<typeof CoordinatesCodec>;
