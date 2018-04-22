/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:arrays" from the command line to test).
 */
class ArrayDrills {
    /**
     * Takes in one parameter (array) and returns it
     */
    identity(arr) {
        return arr;
    }

    /**
     * Takes in two parameters (number and an array in that order), returns
     * the value of the array at the corresponding number index.
     *
     * @example value(2, [0, 1, 3, 2]) -> 3
     */
    value(number, array) {
        return array[number];
    }

    /**
     * Takes in one parameter (array), returns its length
     */
    length(array) {
        return array.length;
    }

    /**
     * Takes in an array of numbers as a parameter, returns the smallest number in the Array.
     *
     * @example min([2, 1, 4, 6, 0]) -> 0
     */
    min(array) {
        return Math.min(...array);
    }

    /**
     * Takes in an array of numbers as a parameter, returns the max number in the Array.
     *
     * @example min([2, 1, 4, 6, 0]) -> 6
     */
    max(array) {
        return Math.max(...array);
    }

    /**
     * Takes in one parameter (array of numbers), calculates the sum and
     * returns it
     *
     * @example sum([1, 2, 3, -2]) -> 4
     */
    sum(array) {
        return array.reduce((total, amount) => total + amount);
    }

    /**
     * Takes in an array of values representing cards. Returns the total count
     * of the "cards" in the array.
     *
     * For values 2, 3, 4, 5, 6 increment the count by 1
     * For values 7, 8, 9 the count remains the same
     * For values 10, 'J', 'Q', 'K', 'A' decrement the count by 1
     *
     * return the total count of all the cards in the array
     *
     * @example count(['A', 7, 3, 'J']) -> -1
     */
    // count(array) {
    //     let up = [2, 3, 4, 5, 6];
    //     let same = [7, 8, 9];
    //     let down = [10, 'J', 'Q', 'K', 'A'];
    // }

    /**
     * Takes in one parameter (array), returns a new array with values equal to
     * the values in the original array squared.
     *
     * @example square([2, 3, 4]) -> [4, 9, 16]
     */
    square(array) {
        return array.map((element) => element ** 2);
    }

    /**
     * Takes in two parameters (number and array in that order), returns a new array
     * with values equal to the values in the original array plus the number passed in.
     *
     * @example add(2, [2, 3, 4]) -> [4, 5, 6]
     */
    add(number, array) {
        return array.map((element) => element + number);
    }

    /**
     * Takes in two parameters (number and array in that order), returns true if the
     * number is found in the array
     *
     * @example contains(3, [1, 3, 2]) -> true
     * @example contains(3, [1, 2, 2]) -> false
     */
    contains(number, array) {
        if (array.includes(number)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in two parameters (arrays), merges them together and
     * returns a single combined array.
     *
     * @example combine([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 2, 3, 5]
     */
    combine(a1, a2) {
        return a1.concat(a2);
    }

    /**
     * Takes in one parameter (array), reverses the array and returns.
     *
     * @example reverse([1, 2, 4, 3]) -> [3, 4, 2, 1]
     */
    reverse(array) {
        return array.reverse();
    }

    /**
     * Takes in one parameter (array). If numbers, sorts by number,
     * if strings, sorts alphabetically by first letter, else returns
     * an empty array
     *
     * @example sort([1, 2, 4, 3]) -> [1, 2, 3, 4]
     * @example sort(['Apple', 'Pear', 'Baseball', 'Banana']) -> ['Apple', 'Banana', 'Baseball', 'Pear']
     */
    // sort() {

    // }

    /**
     * Takes in two parameters (arrays), returns the union of the two sets
     * in the order they were first seen.
     *
     * @example union([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 5]
     */
    union(a1, a2) {
        return [...new Set([...a1, ...a2])];
    }

    /**
     * Takes in two parameters (arrays), returns the intersect of the two sets
     * in the order they were first seen.
     *
     * @example intersect([1, 2, 3, 4], [2, 3, 5]) -> [2, 3]
     */
    intersect(a1, a2) {
        return [...new Set(a1)].filter(x => new Set(a2).has(x));
    }

    /**
     * Takes in two parameters (arrays), returns an array of the elements in the
     * first parameter that are not in the second in the order they were first
     * seen.
     *
     * @example difference([1, 2, 3, 4], [2, 3, 5]) -> [1]
     */
    difference(a1, a2) {
        return a1.filter(x => !a2.includes(x));
    }

    /**
     * Takes in one parameter (array), returns an array of only defined values
     * (no null, undefined, or NaN values) in the order they were first seen.
     *
     * @example defined([1, NaN, undefined, null, 3, null, 4, 0]) -> [1, 3, 4, 0]
     */
    defined(a) {
        return a.filter(Boolean);    
    }

    /**
     * Takes in two parameters (number then array), returns an array in the same
     * order it was input containing no instances of the number.
     *
     * @example remove(3, [1, 2, 4, 3, 5, 3]) -> [1, 2, 4, 5]
     */
    remove(num, arr) {

    }

    /**
     * Takes in one parameter (array) and returns a flattened array with
     * values in the order they were first seen
     * (meaning if the input array has other arrays in it, the values
     * of those arrays will be bubbled up to be value first class members
     * of the return array)
     *
     * @example flatten([0, 1, [2], [[3], [4]]]) -> [0, 1, 2, 3, 4]
     */
    flatten() {

    }

    /**
     * Takes in one parameter (array), which contains values 1-(length+1) of the array
     * with a random number missing. Returns the missing number.
     *
     * For example, if the array's length is 10, it will have numbers 1-11 with
     * 1 number missing.
     *
     * @example findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]) -> 5
     */
    findMissingNumber() {

    }
}

module.exports = new ArrayDrills();
