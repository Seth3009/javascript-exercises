const removeFromArray = function(arr,...args) {
    let arg = [...args];
    for (let i = 0; i < arg.length; i++){
        if(arr.indexOf(arg[i]) > -1){
            arr.splice(arr.indexOf(arg[i]),1)
        }
    } 
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
