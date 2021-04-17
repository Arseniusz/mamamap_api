import { isLeft, isRight } from "fp-ts/lib/Either";
import { TimeFromNumbers } from "./time";

test("Should parse valid time", () => {
    const r = TimeFromNumbers.decode([12, 35]);
    expect(isRight(r)).toBeTruthy();
});

test("Should fails with wrong hours", () => {
    const r = TimeFromNumbers.decode([-2, 35]);
    expect(isLeft(r)).toBeTruthy();
});

test("Should fails with wrong minutes", () => {
    const r = TimeFromNumbers.decode([2, 88]);
    expect(isLeft(r)).toBeTruthy();
});
