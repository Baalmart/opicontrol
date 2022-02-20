/**
 * Manually carry out unit tests by changing the 
 * rates of discharge from here.
 */
const ratesOfDischarge = [2, 3, 4, 1, 5]

let sum = 0;

const numberOfContiguosElements = 2;

/**
 * calculate the average of first `numberOfContiguosElements` 
 * numbers
 */
for (let i = 0; i < numberOfContiguosElements; i++) {
    sum += parseInt(ratesOfDischarge[i]) / numberOfContiguosElements;
}

let max = sum;
for (let i = numberOfContiguosElements; i < ratesOfDischarge.length; i++) {
    /**
     * leave the first in the numberOfContiguosElements elements
     */
    sum -= parseInt(ratesOfDischarge[i - numberOfContiguosElements]) / numberOfContiguosElements;
    /**
     * add the current element so as to compute average 
     * of `numberOfContiguosElements` elements.
     */
    sum += parseInt(ratesOfDischarge[i]) / numberOfContiguosElements;
    max = Math.max(max, sum); //maximize max
}

console.log("highest average between 2 contiguous elements from the provided rates of discharges is: ", max);