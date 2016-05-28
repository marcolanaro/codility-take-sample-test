function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var L = A.length;
    sumRight = 0;
    for (var i  = 0; i < L; i += 1) {
        sumRight += A[i];
    }

    var indexFound = -1;
    var sumLeft = 0;
    var index = 0;
    while (indexFound === -1 && index < L) {
        if (index > 0) {
            sumLeft += A[index - 1];
        }
        if (index < L - 1) {
            sumRight = sumRight - A[index];
        }
        if (sumRight === 0 && index === 0) {
            indexFound = index;
        }
        if (sumLeft === 0 && index === L - 1) {
            indexFound = index;
        }
        if (index !== 0 && index !== L - 1 && sumLeft === sumRight) {
            indexFound = index;
        }
        index += 1;
    }

    return indexFound;
}
