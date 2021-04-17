import { isLeft, isRight } from "fp-ts/lib/Either";
import { PlaceFeatureCodec } from "./place_feature";

test("Should parse valid PlaceFeature", () => {
    const r = PlaceFeatureCodec.decode("PlayingRoom");
    expect(isRight(r)).toBeTruthy();
});

test("Should faild with invalid PlaceFeature", () => {
    const r = PlaceFeatureCodec.decode("CheapDrugs");
    expect(isLeft(r)).toBeTruthy();
});
