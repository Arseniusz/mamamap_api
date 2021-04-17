import { fromEnum } from "../utils/enum";

export enum PlaceType {
    Playground = "Playground",
    Shop = "Shop",
    Park = "Park",
    Restaurant = "Restaurant",
    Learning = "Learning",
}

export const PlaceTypeCodec = fromEnum<PlaceType, string>(
    "PlaceType",
    PlaceType
);
