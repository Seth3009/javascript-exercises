const repeatString = function(str, num) {
    return num < 0 ? 'ERROR' : num > 0 ? str.repeat(num) : ''
};

// Do not edit below this line
module.exports = repeatString;
