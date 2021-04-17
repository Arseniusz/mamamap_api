import { fromEnum } from "../utils/enum";

export enum PlaceFeature {
    BreastFeed = "BreastFeed",
    FirstAidKit = "FirstAidKit",
    BarrierFree = "BarrierFree",
    ChildFood = "ChildFood",
    PlayingRoom = "PlayingRoom",
    Fenced = "Fenced",
    ChangingTable = "ChangingTable",
}

export const PlaceFeatureCodec = fromEnum<PlaceFeature, string>(
    "PlaceFeature",
    PlaceFeature
);
