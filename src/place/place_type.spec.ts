import { isLeft, isRight } from "fp-ts/lib/Either";
import { PlaceTypeCodec } from "./place_type";

test("Should parse valid PlaceType", () => {
    const r = PlaceTypeCodec.decode("Playground");
    expect(isRight(r)).toBeTruthy();
});

test("Should faild with invalid PlaceType", () => {
    const r = PlaceTypeCodec.decode("Factory");
    expect(isLeft(r)).toBeTruthy();
});
