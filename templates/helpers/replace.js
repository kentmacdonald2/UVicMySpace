module.exports = function( find, replace, options) {
    var string = options.fn(this);
    return string.replace( find, replace );
};