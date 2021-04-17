import { isLeft, isRight } from "fp-ts/lib/Either";
import { TimeRangeCodec } from "./time_range";

test("Should parse valid time range", () => {
    const r = TimeRangeCodec.decode({
        from: [9, 0],
        to: [22, 0],
    });
    expect(isRight(r)).toBeTruthy();
});

test("Should fails with wrong value", () => {
    const r = TimeRangeCodec.decode({
        from: [9, 0],
    });
    expect(isLeft(r)).toBeTruthy();
});
