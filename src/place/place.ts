import { Coordinates } from "../geo/coordinates";
import { PlaceFeature } from "./place_feature";
import { PlaceType } from "./place_type";
import { TimeRange } from "../time/time_range";

export type Place = {
  readonly id: string;
  readonly coordinates: Coordinates;
  readonly features: PlaceFeature[];
  readonly type: PlaceType;
  readonly workingHours: TimeRange;
};
