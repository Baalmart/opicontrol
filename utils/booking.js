/**
 * Manually carry out unit tests by changing the 
 * content of the booking time ranges from here.
 */
const bookingTimeRanges = [
    [1, 4],
    [2, 5],
    [7, 9]
]


const checkForBookingOverlaps = (startTime, endTime) => {
    return startTime[1] > endTime[0] && endTime[1] > startTime[0]
}

const isBikeAvailableForAllProvidedBookings = (bookingTimeRanges) => {
    let i, j;
    for (i = 0; i < bookingTimeRanges.length - 1; i++) {
        for (j = i + 1; j < bookingTimeRanges.length; j++) {
            if (checkForBookingOverlaps(bookingTimeRanges[i], bookingTimeRanges[j])) {
                return false
            }

        }

    }
    return true
}

console.log("isBikeAvailableForAllProvidedBookings?: ", isBikeAvailableForAllProvidedBookings(bookingTimeRanges))