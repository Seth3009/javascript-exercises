const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if(count === 0) return 0;

    let before = 0;
	let actual = 1;
	let next;

	for(let i = 1; i < count; i++){
		next = actual;
        actual = before + actual;
		before = next;
	}
    return actual;
};

// Do not edit below this line
module.exports = fibonacci;
