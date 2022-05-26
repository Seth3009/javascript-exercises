const sumAll = function(a,b) {
    
    if(typeof a === "number" && typeof b === "number" && a > 0 && b > 0){
        let lowest = Math.min(a,b);
        let highest = Math.max(a,b);
        let sumall = 0;
        for(let i=lowest; i <= highest; i++) {
            sumall += i;
        }
        return sumall;
    } else { return 'ERROR'}
};

// Do not edit below this line
module.exports = sumAll;
