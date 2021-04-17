import * as io from "io-ts";

export const fromEnum = <T extends string, TEnumValue extends string | number>(
    enumName: string,
    theEnum: { [key in T]: TEnumValue }
): io.Type<TEnumValue> => {
    const isEnumValue = (input: unknown): input is TEnumValue =>
        Object.values(theEnum).includes(input);

    return new io.Type<TEnumValue>(
        enumName,
        isEnumValue,
        (input, context) =>
            isEnumValue(input) ? io.success(input) : io.failure(input, context),
        io.identity
    );
};
