module.exports = function(time) {
    if (time > 12) {
        return time - 12;
    }
    return time;
};