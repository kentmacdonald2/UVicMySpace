module.exports = function(dict, val) {
    for (var key in dict){
        if (dict[key] == val) return true;
    }
    return false;
};