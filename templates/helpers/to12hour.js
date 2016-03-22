module.exports = function(time) {
    if (time > 12) {
        return time - 12 + " PM";
    }
    if (time == 12) {
        return time + " PM";
    }
    return time + " AM";
};