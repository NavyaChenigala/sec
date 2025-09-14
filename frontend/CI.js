function calculateCompoundInterest(principal, rate, time, n) {
    r = rate / 100;
    amount = principal * Math.pow((1 + r / n), n * time);
    compoundInterest = amount - principal;
    
    return {
        totalAmount: amount.toFixed(2),
        compoundInterest: compoundInterest.toFixed(2)
    };
}

principal = 1000;  
 rate = 5;          
  time = 2;           
  n = 4;              

result = calculateCompoundInterest(principal, rate, time, n);
console.log("Total Amount:", result.totalAmount);
console.log("Compound Interest:", result.compoundInterest);

