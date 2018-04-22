/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:dates" from the command line to test).
 */
class DateDrills {
    /**
     * Takes in one parameter (Date) and returns it
     */
    identity(num) {
        return num;
    }

    /**
     * Takes in two parameters (Dates), and returns true if the first parameter is
     * an earlier Date than the second parameter, false otherwise
     */
    isBefore(a, b) {
        if (a < b) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in two parameters (Dates), and returns true if the first parameter is
     * a later Date than the second parameter, false otherwise
     */
    isAfter(a, b) {
        if (a > b) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in two parameters (Dates), and returns true if the first parameter is
     * the same Date as the second parameter, false otherwise
     */
    isSame(a, b) {
        if (a === b) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in three parameters (Dates), and returns true if the first parameter is
     * between the second parameter Date and the third parameter Date, false otherwise.
     * The third parameter will always be later than the second parameter.
     */
    isBetween(a, b, c) {
        if (a > b && a < c) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Takes in one parameter (Date). Returns the day of the week that the date falls
     * on (e.g. 'Sunday', 'Monday').
     *
     * HINT: Sunday is the 0 day of the week, Saturday is day 6 (0-indexed)
     */
    dayOfWeek(a) {
        let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        return days[a.getDay()];
    }

    /**
     * Takes in one parameter (Date). Returns the day of the month that the date falls on
     * as a number.
     */
    dayOfMonth(a) {
        return a.getDate();
    }

    /**
     * Takes in one parameter (Date). Returns the year on which the date falls (e.g. 2018).
     */
    getYear(a) {
        return a.getFullYear();
    }

    /**
     * Takes in one parameter (Date). Returns a string representing the month on which the
     * date falls (e.g. 'January', 'February', 'March', etc)
     */
    getMonth(a) {
        let months = [
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        return months[a.getMonth()];
    }

    /**
     * Takes in two parameters, a Date and a boolean respectively. Returns a string representing the
     * time of day for the date. If the boolean parameter is true, return the time of day in military
     * time, otherwise return it in standard time.
     *
     * HINT: If returning standard time, return the meridiem (e.g. '1:15PM'). If returning military time
     * the meridiem is not needed.
     */
    getTimeOfDay(a, boolean) {
        let hours = a.getHours();
        let minutes = a.getMinutes();

        if (boolean === true) {
            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return hours + ":" + minutes;

        } else {
            let suffix = "AM";

            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours === 0) {
                hours = 12;
            }

            return hours + ":" + minutes + suffix;

        }
    }
}

module.exports = new DateDrills();
