import { isLeft, isRight } from "fp-ts/lib/Either";
import { HourFromNumber } from "./hour";

test("Should parse valid number", () => {
    const r = HourFromNumber.decode(1);
    expect(isRight(r)).toBeTruthy();
});

test("Should return Left on value less then 0", () => {
    const r = HourFromNumber.decode(-1);
    expect(isLeft(r)).toBeTruthy();
});

test("Should return Left on value more then 23", () => {
    const r = HourFromNumber.decode(24);
    expect(isLeft(r)).toBeTruthy();
});

test("Should return Left for string", () => {
    const r = HourFromNumber.decode("12");
    expect(isLeft(r)).toBeTruthy();
});
