/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:strings" from the command line to test).
 */
class StringDrills {
    /**
     * Takes in one parameter (strings) and returns it
     */
    identity(str) {
        return str;
    }

    /**
     * Takes in two parameters (string), concatenate (merges) them together and
     * returns them.
     */
    combine(x, y) {
        return x + y;
    }

    /**
     * Takes in one parameter (string), returns its length
     */
    length(x) {
        return x.length;
    }

    /**
     * Takes in one parameter (string), returns true if it is empty, false otherwise
     */
    isEmpty(x) {
        if (x === '') {
            return true;
        } else {
            return false;
        }
    }   

    /**
     * Takes in one parameter (string), returns an Array of strings that
     * contains only the words in the string (no spaces)
     */
    toArray(x) {
        return x.split(' ');
    }

    /**
     * Takes in two parameters, a string and a number (in that order).
     * Returns a string that only contains the first X number of characters
     * based on the number parameter.
     */
    clip(string, number) {
        return string.substring(0, number);
    }

    /**
     * Takes in one parameter (string), returns a new string with the characters
     * in the reverse order
     */
    reverse(x) {

        // // let splitX = x.split('');
        // // let reverseX = splitX.reverse();
        // // let joinX = reverseX.join('');
        // // return joinX

        // OR 

        return x.split('').reverse().join('');

        // OR
    }

    /**
     * Takes in two parameters, a string and a number (in that order). Similar to
     * the clip method, only it will only truncate if the string is long enough.
     * All strings that are truncated should have an elipsis ('...') appended to
     * them. The final string should not be longer than the number passed in! If the number passed in is less than or equal to 3,
     * return the string as-is.
     */
    truncate(string, number) {
        if (number <= 3) {
            return string;
        } 
        if (number <= string.length) {
            return string.slice(0, number - 3) + '...';
        } else {
            return string;
        }
    }

    /**
     * Takes in one parameter (string), returns a new string that has no leading or
     * trailing spaces.
     */
    strip(x) {
        // THIS ONE IS CHEESY AND ONLY REMOVES SPACES LOCATED AT THE BEGINNING AND END OF A STRING. DOESN'T ACCOUNT FOR THERE POSSIBLY BEING 2 SPACES AT THE BEGINNING AND END. 
        // ex. '  HELLO  ' WOULD RETURN AS ' HELLO '
        // if(x.includes(' ')) {
        //     return x.slice(1, -1);
        // } else {
        //     return x;
        // }

        // THIS ONE FINDS AND REPLACES ALL EMPTY SPACE (' ', and also stuff like carriage returns, tabs, etc...) AND REPLACES THEM WITH NO SPACES ('').
        return x.replace(/\s/g, '');
    }

    /**
     * Takes in two parameters, a string and a number (in that order). Returns
     * a string that is repeated X number of times depending upon the number
     * passed in.
     */
    repeat(string, number) {
        return string.repeat(number);
    }

    /**
     * Takes in two paramters (strings), returns true if the second string is
     * contained within the first string, false otherwise.
     */
    contains(x, y) {
        if (x.includes(y)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in two paramters (strings), returns true if the strings are
     * the same, false otherwise. (case-sensitive)
     */
    isEqual(x, y) {
        if (x === y) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = new StringDrills();
