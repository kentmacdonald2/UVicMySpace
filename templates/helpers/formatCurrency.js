module.exports = function(value) {
    if(!value) return "0.00";
    return value.toFixed(2);
};
