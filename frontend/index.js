function calculateFare(distance) {
    let fare = 0;

    for (let i = 1; i <= distance; i++) {
        if (i <= 4) {
            if (i === 1) {
                fare += 30;  
            }
        } else if (i <= 9) {
            fare += 10;
        } else if (i <= 19) {
            fare += 15;
        } else if (i <= 34) {
            fare += 20;
        } else {
        
            break;
        }
    }

    return fare;
}


let distance = 19.5;
console.log(`Total fare for ${distance} km is ₹${calculateFare(distance)}`);




let i = 1;

while (i <= 10) {
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
}




