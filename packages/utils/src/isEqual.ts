export function isEqual(value: any, other: any) {
    // First handle the case where both values are primitive types.
    if (typeof value !== "object" && typeof other !== "object") {
        // we can avoid the NaN comparison issue if we check the equality of two primitive types using Object.is
        return Object.is(value, other);
    }

    // Although null is a primitive type in JavaScript, due to some historical bugs,
    // the type of null is object, so we need to additionally handling for null.
    if (value === null && other === null) {
        return true;
    }

    // After handling the case where both are primitive types,
    // we can handle one value is primitive type but the other is not.
    // If one is a primitive type and the other is an object type, then return false
    if (typeof value !== typeof other) {
        return false;
    }

    // If the above conditions are passed, it means that both values are object types,
    // So we compare the two objects first, and return true if they are from the same reference
    if (value === other) {
        return true;
    }

    // Next, check the case where both objects are arrays
    if (Array.isArray(value) && Array.isArray(other)) {
        // If the two arrays have different lengths, return false
        if (value.length !== other.length) {
            return false;
        }
        // iterate over each value in the array, then recursively compare two values with isEqual
        for (let i = 0; i < value.length; i++) {
            if (!isEqual(value[i], other[i])) {
                return false;
            }
        }

        return true;
    }

    // if one is an array, but the other is not, return false
    // Since we pass the && condition above, it means both not both values are arrays
    // here you can use || to check if one of them is an array
    if (Array.isArray(value) || Array.isArray(other)) {
        return false;
    }

    // If the above conditions are not met, the remaining possibility is that both values ​​are objects.
    // First check that the two objects have the same number of keys,
    // if not the same number means that the two objects must be different
    if (Object.keys(value).length !== Object.keys(other).length) {
        return false;
    }

    // If two objects have the same number of keys, iterate over the first object through Object.entires
    for (const [k, v] of Object.entries(value)) {
        // If a key in the first object does not exist in the second object, it means the two are different
        if (!(k in other)) {
            return false;
        }

        // If the key-value pair in the first object is different from the second, it also means that the two objects are different
        // Remember, because the value may also be an object, so use isEqual to recursively check whether the two values ​​are the same
        if (!isEqual(v, other[k])) {
            return false;
        }
    }

    return true;
}