import { isLeft, isRight } from "fp-ts/lib/Either";
import { NewPlaceCodec } from "./place";

test("Should parse valid NewPlace", () => {
    const r = NewPlaceCodec.decode({
        coordinates: [23.13, 12.45],
        features: ["PlayingRoom", "ChildFood"],
        type: "Restaurant",
        workingHours: {
            from: [10, 0],
            to: [21, 0],
        },
    });
    expect(isRight(r)).toBeTruthy();
});

test("Should failed with invalid NewPlace", () => {
    const r = NewPlaceCodec.decode({
        features: ["PlayingRoom", "ChildFood"],
        type: "Restaurant",
        workingHours: {
            from: [10, 0],
            to: [21, 0],
        },
    });
    expect(isLeft(r)).toBeTruthy();
});
