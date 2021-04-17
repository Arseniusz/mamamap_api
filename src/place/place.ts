import * as io from "io-ts";

import { CoordinatesCodec } from "../geo/coordinates";
import { PlaceFeatureCodec } from "./place_feature";
import { PlaceTypeCodec } from "./place_type";
import { TimeRangeCodec } from "../time/time_range";

function omit<O, K extends keyof O>(o: O, k: K): Omit<O, K> {
    const { [k]: _, ...rest } = o;
    return rest;
}

export const PlaceCodec = io.type({
    id: io.string,
    coordinates: CoordinatesCodec,
    features: io.array(PlaceFeatureCodec),
    type: PlaceTypeCodec,
    workingHours: TimeRangeCodec,
});

export const NewPlaceCodec = io.type(omit(PlaceCodec.props, "id"));

export type Place = io.TypeOf<typeof PlaceCodec>;
export type NewPlace = io.TypeOf<typeof NewPlaceCodec>;
