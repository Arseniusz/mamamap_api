import { isLeft, isRight } from "fp-ts/lib/Either";
import { CoordinatesCodec } from "./coordinates";

test("Should parse valid coordinates", () => {
    const r = CoordinatesCodec.decode([59.57, 30.19]);
    expect(isRight(r)).toBeTruthy();
});

test("Should failed with in valid coordinates", () => {
    const r = CoordinatesCodec.decode([59.57]);
    expect(isLeft(r)).toBeTruthy();
});
