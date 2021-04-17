import { isLeft, isRight } from "fp-ts/lib/Either";
import { MinuteFromNumber } from "./minute";

test("Should parse valid number", () => {
    const r = MinuteFromNumber.decode(1);
    expect(isRight(r)).toBeTruthy();
});

test("Should return Left on value less then 0", () => {
    const r = MinuteFromNumber.decode(-1);
    expect(isLeft(r)).toBeTruthy();
});

test("Should return Left on value more then 60", () => {
    const r = MinuteFromNumber.decode(61);
    expect(isLeft(r)).toBeTruthy();
});

test("Should return Left for string", () => {
    const r = MinuteFromNumber.decode("12");
    expect(isLeft(r)).toBeTruthy();
});
